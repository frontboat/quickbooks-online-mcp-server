# QuickBooks Online MCP Server

A [Model Context Protocol](https://modelcontextprotocol.io) server that gives Claude (or any MCP-compatible host) the ability to read and write QuickBooks Online data — customers, invoices, bills, accounts, journal entries, and 29 financial reports — through a single connection.

## What you get

- **Promoted tools** for common workflows: `search_customers`, `search_invoices`, `search_accounts`, `create_customer`, `create_invoice`
- **`search_actions` + `execute_action`** for the long tail — 55 operations across 12 entity types (Customer, Invoice, Estimate, Bill, Account, Item, Vendor, Employee, JournalEntry, BillPayment, Payment, Purchase)
- **`describe_report` + `run_report`** — a report query engine covering all 29 QuickBooks reports (P&L, Balance Sheet, Cash Flow, Aged Receivables, etc.) with `summary`/`flat`/`full` view modes so you can size responses to the question
- **Read-only mode** — set `QUICKBOOKS_READ_ONLY=true` in `.env` to safely connect the server to a production company file. All `create_*`, `update_*`, and `delete_*` operations are blocked; only searches, gets, and reports run.
- **Hard-delete confirmation** — permanent deletes (estimates, bills, journal entries, bill payments, customer payments, purchases) require interactive confirmation before proceeding. On elicitation-capable hosts like Claude Code, you'll see a native confirmation dialog showing the entity summary. On older hosts, the server refuses the delete unless `confirm: true` is passed explicitly in `params`.
- **Token storage outside `.env`** — OAuth refresh tokens live in `~/.quickbooks-mcp/tokens.json` (chmod 600), not in your project directory

## Requirements

- **Node.js 20+** (the package targets `ES2020` and uses ES modules)
- **[Bun](https://bun.sh)** for install and build. `npm`/`pnpm` also work if you prefer.
- An **Intuit Developer account** with an app configured for the QuickBooks Online API

## Intuit app setup

1. Go to the [Intuit Developer Portal](https://developer.intuit.com/) and sign in
2. Create a new app (or open an existing one) and enable the **Accounting** API scope
3. Copy the **Client ID** and **Client Secret** from the app's "Keys & OAuth" section
4. Under **Redirect URIs**, add exactly this:
   ```
   http://localhost:8000/callback
   ```
   The server's auth flow binds to port 8000 on your machine during the one-time OAuth step.
5. Decide whether you're connecting to the **sandbox** (for testing — recommended first) or **production** (your real books)

## Installation

```bash
git clone https://github.com/<your-fork>/quickbooks-online-mcp-server.git
cd quickbooks-online-mcp-server
bun install
bun run build
```

`bun install` pulls dependencies. `bun run build` compiles TypeScript into `dist/`, copies the report schema JSON next to the compiled output, and sets the executable bit on the entry points. You need both steps — the `dist/` directory is the one your MCP client will launch, so it must exist before you add the server to Claude Code or Claude Desktop.

## Configuration

Create a `.env` file at the repo root with your **static app credentials**:

```env
QUICKBOOKS_CLIENT_ID=your_client_id
QUICKBOOKS_CLIENT_SECRET=your_client_secret
QUICKBOOKS_ENVIRONMENT=sandbox        # or "production"

# Optional: when true, the server refuses create/update/delete operations.
# Useful for connecting the server to production books without risk.
QUICKBOOKS_READ_ONLY=false
```

**Do not** put `QUICKBOOKS_REFRESH_TOKEN` or `QUICKBOOKS_REALM_ID` in `.env`. Those are obtained via the auth flow below and stored in a dedicated state file (see [Token storage](#token-storage)). If you have existing setups with these in `.env`, they will be migrated automatically on first run.

## First-time authentication

Run this once before pointing any MCP client at the server:

```bash
bun run auth
```

This will:
1. Start a temporary local server on port 8000
2. Open your default browser to Intuit's OAuth consent screen
3. After you grant access, receive the callback, exchange the code for tokens, and save them to `~/.quickbooks-mcp/tokens.json`
4. Close the browser tab and exit

You should see:

```
[qbo-mcp-auth] Starting QuickBooks OAuth flow...
[qbo-mcp-auth] A browser window will open. Grant access to continue.
[qbo-mcp-auth] ✓ Authenticated. Tokens saved to /Users/you/.quickbooks-mcp/tokens.json.
```

**Only run this once per install** — the MCP server will automatically refresh the access token on every tool call using the stored refresh token. If you re-run `bun run auth`, it simply re-completes the flow without re-prompting (the flow is idempotent).

## Adding the server to Claude

### Claude Code

From any directory:

```bash
claude mcp add quickbooks node /absolute/path/to/quickbooks-online-mcp-server/dist/index.js
```

Or edit `~/.claude/mcp.json` directly:

```json
{
  "mcpServers": {
    "quickbooks": {
      "command": "node",
      "args": ["/absolute/path/to/quickbooks-online-mcp-server/dist/index.js"]
    }
  }
}
```

The server reads credentials from the `.env` file next to its binary, so you don't need to re-specify them in the MCP config.

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or the equivalent on your platform:

```json
{
  "mcpServers": {
    "quickbooks": {
      "command": "node",
      "args": ["/absolute/path/to/quickbooks-online-mcp-server/dist/index.js"]
    }
  }
}
```

Restart Claude Desktop after editing. The QuickBooks tools will appear in the tool picker (hammer icon).

### Read-only mode

To connect a production company file safely — reports and lookups only, no writes — set `QUICKBOOKS_READ_ONLY=true` in `.env` before launching. The server will hide all `create_*`, `update_*`, and `delete_*` operations and refuse any write action even if it sneaks through. The promoted `create_customer` and `create_invoice` tools are not registered at all in this mode.

## Token storage

OAuth state lives in a dedicated state file, **not** in your project's `.env`:

- **Default location**: `~/.quickbooks-mcp/tokens.json`
- **Override**: set `QUICKBOOKS_STATE_DIR=/some/path` to use a different directory
- **Permissions**: `0600` on POSIX systems (owner read/write only)
- **Contents**: `refresh_token`, `realm_id`, `environment`, `updated_at`

To **reset** authentication, delete this file and re-run `bun run auth`. To **revoke** access entirely, also disconnect the app from within QuickBooks Online under **Settings → Apps**.

## Available tools

### Promoted tools (always visible)

| Tool | Purpose |
|---|---|
| `search_customers` | Find customers by name, company, balance, active status, etc. |
| `search_invoices` | Find invoices by customer, date, amount, status |
| `search_accounts` | Look up chart-of-accounts entries by type, classification, balance |
| `create_customer` *(write)* | Create a new customer |
| `create_invoice` *(write)* | Create an invoice linked to a customer and items |

### Catalog tools

| Tool | Purpose |
|---|---|
| `search_actions` | Given a plain-English intent, return matching actions with descriptions and parameter hints. 50 actions across 11 entities. |
| `execute_action` | Run any action from the catalog by ID. Use for the long tail: updates, deletes, reads on entities without promoted tools. |

### Report tools

| Tool | Purpose |
|---|---|
| `describe_report` | List all 29 reports, or describe one report's full parameter schema (date macros, filters, grouping, accounting basis, etc.) |
| `run_report` | Execute a report. `view` param controls response size: `summary` (default, top-level totals only), `flat` (adds every row with section path), `full` (includes raw QB tree). |

Reports covered include Profit & Loss, Balance Sheet, Cash Flow, Trial Balance, General Ledger, Aged Receivables/Payables, Customer/Vendor Balance, Transaction List (32 filter params), and more.

## Troubleshooting

**"Client ID, Client Secret and Redirect URI must be set in environment variables"**
Your `.env` file is missing `QUICKBOOKS_CLIENT_ID` or `QUICKBOOKS_CLIENT_SECRET`, or the server can't find the `.env` file. The server looks in the current working directory, so when launched via an MCP host the cwd may differ from what you expect. Launch the server manually from the repo root to isolate the issue.

**OAuth browser opens but redirect fails**
Check that `http://localhost:8000/callback` is registered in your Intuit app's Redirect URIs list (it must match exactly — no trailing slash). Also confirm nothing else is using port 8000.

**"Token file at ... is missing required fields"**
The state file is corrupted. Delete it and re-run `bun run auth`:
```bash
rm ~/.quickbooks-mcp/tokens.json
bun run auth
```

**Tools work but return `Unauthorized` or `401`**
The refresh token has been revoked (Intuit refresh tokens expire after 100 days of non-use). Delete the state file and re-authenticate.

**I want to switch between sandbox and production**
Change `QUICKBOOKS_ENVIRONMENT` in `.env`, delete the state file (sandbox and production realms are different), and re-run `bun run auth`.

## Development

```bash
bun run build    # one-shot build
bun run watch    # tsc in watch mode
bun run knip     # find unused files, exports, and dependencies
bun run auth     # (re-)run the OAuth setup flow
```

Source lives in `src/`. The build emits to `dist/` mirroring the source structure.

## License

MIT — see `LICENSE`.
