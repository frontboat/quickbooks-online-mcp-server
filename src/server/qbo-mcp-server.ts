import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { isReadOnly } from "../config.js";

/**
 * Singleton wrapper for the QuickBooks Online MCP Server.
 * Provides lazy initialization and single instance management of the MCP server.
 */
export class QuickbooksMCPServer {
  private static instance: McpServer | null = null;

  private constructor() {}

  /**
   * Gets or creates the singleton MCP server instance.
   * Initializes the server with capabilities, instructions, and registered tools.
   * @returns The MCP server instance.
   */
  public static GetServer(): McpServer {
    if (QuickbooksMCPServer.instance === null) {
      const lines = [
        "This server connects to the QuickBooks Online API. It manages 11 entity types: Customer, Invoice, Estimate, Bill, Account, Item, Vendor, Employee, JournalEntry, BillPayment, and Purchase.",
        "Use search_actions to discover available operations, then execute_action to run them.",
        "QuickBooks IDs are opaque strings — never guess them. Always search first to get valid IDs before calling get/update/delete operations.",
        "Updates require the entity's current SyncToken for optimistic locking. Fetch the entity first with a get operation to obtain the SyncToken, then include it in the update payload.",
        "Deleting a Customer or Vendor sets Active=false (soft delete). Other entity deletes are hard deletes.",
        "For financial reports, use the dedicated describe_report and run_report tools — NOT execute_action. Call describe_report (no args) to see all 29 reports. Call describe_report(report_id) to see every supported parameter for a specific report, including the full list of date_macro values. Call run_report(report_id, params, view) to execute. The view parameter controls response size: 'summary' (default) returns only top-level section totals like Income/Expenses/NetIncome — ideal for single-number questions. 'flat' adds every data row with its section path — ideal for breakdowns and comparisons. 'full' includes the raw QB tree. For period comparisons (this month vs last month, YoY, etc.) call run_report twice with different date_macro or date range params and diff the summary objects.",
      ];

      if (isReadOnly) {
        lines.push("READ-ONLY MODE is active. Only search, get, and report operations are available. Create, update, and delete operations are blocked.");
      } else {
        lines.push("Promoted tools available directly: search_customers, create_customer, create_invoice, search_invoices, search_accounts.");
      }

      QuickbooksMCPServer.instance = new McpServer(
        {
          name: "QuickBooks Online MCP Server",
          version: "1.0.0",
        },
        { instructions: lines.join("\n") },
      );
    }
    return QuickbooksMCPServer.instance;
  }
}