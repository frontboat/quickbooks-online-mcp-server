#!/usr/bin/env node

/**
 * Standalone QuickBooks OAuth setup command.
 *
 * Intended to be run once before adding the MCP server to a host like
 * Claude Code or Claude Desktop: opens a browser, walks the user through
 * Intuit's OAuth flow, and writes the resulting refresh token and realm ID
 * to the token state file (`~/.quickbooks-mcp/tokens.json` by default).
 *
 * Once this has run successfully, the MCP server can start up and answer
 * tool calls without blocking on an interactive flow.
 */

import { quickbooksClient } from "./clients/quickbooks-client.js";
import { getTokenFilePath } from "./helpers/token-store.js";

async function main(): Promise<void> {
  console.error("[qbo-mcp-auth] Starting QuickBooks OAuth flow...");
  console.error("[qbo-mcp-auth] A browser window will open. Grant access to continue.");

  await quickbooksClient.authenticate();

  console.error(
    `[qbo-mcp-auth] ✓ Authenticated. Tokens saved to ${getTokenFilePath()}.`,
  );
  console.error(
    "[qbo-mcp-auth] You can now add this MCP server to your client configuration.",
  );
  process.exit(0);
}

main().catch((error) => {
  console.error("[qbo-mcp-auth] Authentication failed:", error);
  process.exit(1);
});
