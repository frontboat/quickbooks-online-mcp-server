// src/tools/run-report.tool.ts
import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { runReport } from "../reports/run.js";
import { formatError } from "../helpers/format-error.js";

const inputSchema = {
  report_id: z
    .string()
    .describe(
      "The report ID (e.g. 'profit_and_loss', 'balance_sheet', 'aged_receivables'). Call describe_report to discover valid IDs.",
    ),
  params: z
    .looseObject({})
    .optional()
    .describe(
      "Query parameters for the report as a JSON object. Common params: date_macro (e.g. 'Last Month', 'This Fiscal Year-to-date'), start_date/end_date ('YYYY-MM-DD'), accounting_method ('Cash'|'Accrual'), summarize_column_by ('Month'|'Quarter'|'Year'|'Total'). Call describe_report(report_id) to see every supported parameter for a specific report.",
    ),
  view: z
    .enum(["summary", "flat", "full"])
    .default("summary")
    .describe(
      "Which view of the response to return. 'summary' returns only top-level section totals (Income, Expenses, NetIncome, etc.) — smallest, best for single-number questions. 'flat' returns summary plus every leaf data row with its section path — good for breakdowns and comparisons. 'full' also includes the raw QB response tree — use only when you need cell-level detail not captured in flat.",
    ),
};

/**
 * Registers the run_report tool with the MCP server.
 *
 * Executes any QuickBooks report with arbitrary parameters and returns a normalized
 * response. Claude can choose between three views (summary/flat/full) depending on
 * how much detail the question requires, keeping token usage proportional to need.
 */
export function registerRunReport(server: McpServer) {
  server.registerTool(
    "run_report",
    {
      description:
        "Execute any QuickBooks report with arbitrary parameters. Returns a normalized response with top-level section totals (`summary`), flat per-row data (`flat`), and metadata. For single-number questions use view='summary'. For breakdowns/comparisons use view='flat'. Call describe_report first to learn the valid parameters for a specific report. For comparison questions, call run_report twice with different date ranges and diff the summaries.",
      inputSchema,
      annotations: { readOnlyHint: true, openWorldHint: true },
    },
    async ({ report_id, params, view }) => {
      try {
        const normalized = await runReport(report_id, params ?? {});

        const payload: Record<string, unknown> = {
          report_id,
          meta: normalized.meta,
          summary: normalized.summary,
        };

        if (view === "flat" || view === "full") {
          payload.flat = normalized.flat;
        }

        if (view === "full") {
          payload.raw = normalized.raw;
        }

        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(payload, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          isError: true,
          content: [
            {
              type: "text" as const,
              text: `Error running report "${report_id}": ${formatError(error)}. Call describe_report("${report_id}") to verify valid parameters.`,
            },
          ],
        };
      }
    },
  );
}
