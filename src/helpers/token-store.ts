// src/helpers/token-store.ts
import fs from "fs";
import os from "os";
import path from "path";

/**
 * Persisted OAuth state for the QuickBooks client.
 * Only the long-lived pieces — access tokens are refreshed in-memory per session.
 */
interface StoredTokens {
  refresh_token: string;
  realm_id: string;
  environment: string;
  updated_at: string;
}

/**
 * Returns the directory where token state is stored.
 *
 * Defaults to `~/.quickbooks-mcp/`. Override with the `QUICKBOOKS_STATE_DIR`
 * environment variable (useful for testing or for running multiple isolated
 * QuickBooks connections under different state roots).
 */
function getStateDir(): string {
  const override = process.env.QUICKBOOKS_STATE_DIR;
  if (override) return override;
  return path.join(os.homedir(), ".quickbooks-mcp");
}

/**
 * Returns the absolute path to the tokens file.
 */
export function getTokenFilePath(): string {
  return path.join(getStateDir(), "tokens.json");
}

/**
 * Reads the persisted token state, or null if no state file exists yet.
 *
 * Throws only if the file exists but cannot be parsed — a corrupted state
 * file is a user-visible problem that should not be silently swallowed.
 */
export function loadTokens(): StoredTokens | null {
  const file = getTokenFilePath();
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const parsed = JSON.parse(raw) as StoredTokens;
  if (!parsed.refresh_token || !parsed.realm_id) {
    throw new Error(
      `Token file at ${file} is missing required fields. Delete it and re-run \`bun run auth\` to re-authenticate.`,
    );
  }
  return parsed;
}

/**
 * Writes token state to disk, creating the state directory if needed.
 * On POSIX systems the file is chmod'd to 600 so only the owner can read it.
 */
export function saveTokens(
  tokens: Omit<StoredTokens, "updated_at">,
): StoredTokens {
  const dir = getStateDir();
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true, mode: 0o700 });
  }
  const record: StoredTokens = {
    ...tokens,
    updated_at: new Date().toISOString(),
  };
  const file = getTokenFilePath();
  fs.writeFileSync(file, JSON.stringify(record, null, 2) + "\n");
  if (process.platform !== "win32") {
    fs.chmodSync(file, 0o600);
  }
  return record;
}
