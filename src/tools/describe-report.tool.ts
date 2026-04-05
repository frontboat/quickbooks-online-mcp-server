// src/tools/describe-report.tool.ts
import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { describeReport, listReports } from "../reports/describe.js";

const inputSchema = {
  report_id: z
    .string()
    .optional()
    .describe(
      "The report ID (e.g. 'profit_and_loss', 'balance_sheet'). Omit to list all available reports.",
    ),
};

/**
 * Registers the describe_report tool with the MCP server.
 *
 * Used by Claude to discover available reports and their parameter schemas.
 * Without a report_id, returns the list of all 29 reports.
 * With a report_id, returns the full parameter schema for that report —
 * every parameter with its type, default, required flag, and description,
 * sourced from Intuit's developer portal metadata.
 */
export function registerDescribeReport(server: McpServer) {
  server.registerTool(
    "describe_report",
    {
      description:
        "Discover QuickBooks reports and their parameters. Call with no arguments to list all 29 available reports. Call with a report_id to get the full parameter schema for that report (every supported param with type, default, and description including valid enum values like date_macro options). Use this before run_report when you need to build a precise query.",
      inputSchema,
      annotations: { readOnlyHint: true },
    },
    async ({ report_id }) => {
      if (!report_id) {
        const reports = listReports();
        return {
          content: [
            {
              type: "text" as const,
              text: `Available reports (${reports.length}):\n\n${JSON.stringify(reports, null, 2)}\n\nCall describe_report with a specific report_id to see its full parameter schema.`,
            },
          ],
        };
      }

      const schema = describeReport(report_id);
      if (!schema) {
        return {
          isError: true,
          content: [
            {
              type: "text" as const,
              text: `Unknown report_id "${report_id}". Call describe_report without arguments to see valid IDs.`,
            },
          ],
        };
      }

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(schema, null, 2),
          },
        ],
      };
    },
  );
}
