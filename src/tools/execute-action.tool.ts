// src/tools/execute-action.tool.ts
import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ACTION_CATALOG } from "../catalog/action-catalog.js";
import { ENTITIES } from "../catalog/entity-config.js";
import {
  executeCreate,
  executeGet,
  executeUpdate,
  executeDelete,
  executeSearch,
} from "../handlers/generic-handler.js";
import { formatError } from "../helpers/format-error.js";
import { jsonOrNative } from "../helpers/client-coerce.js";
import { isReadOnly, isWriteOperation } from "../config.js";

const inputSchema = {
  action_id: z
    .string()
    .describe(
      "The action ID from search_actions results (e.g. 'create_customer', 'search_invoices').",
    ),
  params: jsonOrNative(z.record(z.string(), z.any())).describe(
    "Parameters for the action. Shape depends on the operation type — check parameterHints from search_actions. For hard-delete operations (estimate, bill, journal_entry, bill_payment, payment, purchase), you can include `confirm: true` to bypass interactive confirmation on hosts without elicitation support.",
  ),
};

/**
 * Produces a short human-readable description of an entity for confirmation
 * prompts. Best-effort across entity types — shows whichever identifying
 * fields are present on the fetched QuickBooks record.
 */
function summarizeForConfirm(entity: unknown, label: string): string {
  if (!entity || typeof entity !== "object") return `${label} (unknown)`;
  const e = entity as Record<string, unknown>;
  const parts: string[] = [`${label} ${e.Id ?? "?"}`];
  if (typeof e.DocNumber === "string" && e.DocNumber) parts.push(`#${e.DocNumber}`);
  if (typeof e.TxnDate === "string" && e.TxnDate) parts.push(e.TxnDate);
  if (typeof e.TotalAmt === "number") parts.push(`$${e.TotalAmt.toFixed(2)}`);
  const vendor = (e.VendorRef as { name?: string } | undefined)?.name;
  if (vendor) parts.push(`vendor: ${vendor}`);
  const customer = (e.CustomerRef as { name?: string } | undefined)?.name;
  if (customer) parts.push(`customer: ${customer}`);
  return parts.join(" · ");
}

/**
 * Registers the execute_action tool with the MCP server.
 * Executes QuickBooks operations (create, get, update, delete, search, report) by action ID.
 * @param server - The MCP server instance to register the tool with.
 */
export function registerExecuteAction(server: McpServer) {
  server.registerTool(
    "execute_action",
    {
      description:
        "Execute a QuickBooks action by its ID. Get the action_id and required params from search_actions first. For create/update: pass { data: {...} }. For get/delete: pass { id: 'the-id' }. For search: pass { criteria: [...], limit?, offset? }. For reports: pass { options: { start_date?, end_date?, ... } }.",
      inputSchema,
      annotations: { openWorldHint: true },
    },
    async ({ action_id, params }) => {
      const action = ACTION_CATALOG.find((a) => a.id === action_id);
      if (!action) {
        return {
          isError: true,
          content: [
            {
              type: "text" as const,
              text: `Unknown action "${action_id}". Use search_actions to find valid action IDs.`,
            },
          ],
        };
      }

      if (isReadOnly && isWriteOperation(action.operation)) {
        return {
          isError: true,
          content: [
            {
              type: "text" as const,
              text: `Server is in read-only mode. Write operation "${action_id}" (${action.operation}) is not allowed. Only search and get operations are available via execute_action; use describe_report and run_report for financial reports.`,
            },
          ],
        };
      }

      const config = ENTITIES[action.entity];
      if (!config) {
        return {
          isError: true,
          content: [
            {
              type: "text" as const,
              text: `Entity "${action.entity}" not configured. This is a server bug.`,
            },
          ],
        };
      }

      const label = config.label;
      const op = action.operation;

      try {
        let result: any;

        switch (op) {
          case "create":
            result = await executeCreate(action.entity, params.data);
            return {
              content: [
                {
                  type: "text" as const,
                  text: `${label} created successfully (ID: ${result?.Id ?? "unknown"}):`,
                },
                { type: "text" as const, text: JSON.stringify(result, null, 2) },
              ],
            };

          case "get":
            result = await executeGet(action.entity, params.id);
            return {
              content: [
                { type: "text" as const, text: `${label} (ID: ${params.id}):` },
                { type: "text" as const, text: JSON.stringify(result, null, 2) },
              ],
            };

          case "update":
            result = await executeUpdate(action.entity, params.data);
            return {
              content: [
                {
                  type: "text" as const,
                  text: `${label} updated successfully (ID: ${result?.Id ?? params.data?.Id ?? "unknown"}):`,
                },
                { type: "text" as const, text: JSON.stringify(result, null, 2) },
              ],
            };

          case "delete": {
            const deleteId = params.id ?? params.data;

            // Hard deletes are permanent and irreversible. Require an
            // explicit confirmation — either via the client's elicitation
            // capability (spec-native mid-tool user input) or via an
            // explicit `confirm: true` param for clients that don't
            // support elicitation.
            if (!config.softDelete) {
              const explicitConfirm = params.confirm === true;
              if (!explicitConfirm) {
                const deleteIdStr =
                  typeof deleteId === "object" && deleteId !== null
                    ? (deleteId as { Id?: string }).Id
                    : (deleteId as string | undefined);
                if (!deleteIdStr) {
                  return {
                    isError: true,
                    content: [
                      {
                        type: "text" as const,
                        text: `Cannot delete ${label}: missing ID. Pass { id: "..." } in params.`,
                      },
                    ],
                  };
                }

                const target = await executeGet(action.entity, deleteIdStr);
                const summary = summarizeForConfirm(target, label);

                const canElicit =
                  server.server.getClientCapabilities()?.elicitation?.form !==
                  undefined;

                if (canElicit) {
                  // No fields in the requested schema — the host's Accept /
                  // Decline affordance is the answer. A schemaless elicitation
                  // renders as a single native confirmation dialog, avoiding
                  // the redundant "tick a box AND press Accept" two-step.
                  const elicitResult = await server.server.elicitInput({
                    mode: "form",
                    message: `Permanently delete ${summary}? This action cannot be undone.`,
                    requestedSchema: {
                      type: "object",
                      properties: {},
                    },
                  });

                  if (elicitResult.action !== "accept") {
                    return {
                      content: [
                        {
                          type: "text" as const,
                          text: `Deletion of ${summary} was cancelled by the user.`,
                        },
                      ],
                    };
                  }
                } else {
                  return {
                    isError: true,
                    content: [
                      {
                        type: "text" as const,
                        text:
                          `Refusing to hard-delete ${summary} without confirmation. ` +
                          `This host does not support interactive confirmation. ` +
                          `To proceed, re-call execute_action with { confirm: true } in params — ` +
                          `e.g. { id: "${deleteIdStr}", confirm: true }.`,
                      },
                    ],
                  };
                }
              }
            }

            result = await executeDelete(action.entity, deleteId);
            const verb = config.softDelete ? "deactivated" : "deleted";
            return {
              content: [
                { type: "text" as const, text: `${label} ${verb} successfully.` },
                { type: "text" as const, text: JSON.stringify(result, null, 2) },
              ],
            };
          }

          case "search": {
            const items = await executeSearch(action.entity, params.criteria ?? params);
            const count = items.length;
            const truncated = items.slice(0, 50);
            const suffix = count > 50 ? ` Showing first 50 of ${count}. Refine your search criteria to narrow down.` : "";
            return {
              content: [
                { type: "text" as const, text: `Found ${count} ${label.toLowerCase()}(s).${suffix}` },
                { type: "text" as const, text: JSON.stringify(truncated, null, 2) },
              ],
            };
          }

          default:
            return {
              isError: true,
              content: [
                {
                  type: "text" as const,
                  text: `Unknown operation "${op}" for action "${action_id}".`,
                },
              ],
            };
        }
      } catch (error) {
        return {
          isError: true,
          content: [
            {
              type: "text" as const,
              text: `Error executing ${action_id}: ${formatError(error)}. Use search_actions to verify the action exists and check the parameterHints for correct parameter format.`,
            },
          ],
        };
      }
    },
  );
}
