// src/reports/normalize.ts

/**
 * Shape of a single column definition in a QB report response.
 */
interface QBColumn {
  ColTitle?: string;
  ColType?: string;
}

/**
 * Shape of a cell within a row's ColData array.
 */
interface QBColData {
  value?: string;
  id?: string;
  href?: string;
}

/**
 * A row node in the QB report response tree.
 * Can be either a Data leaf or a Section container.
 */
interface QBRow {
  type?: "Data" | "Section";
  group?: string;
  Header?: { ColData?: QBColData[] };
  Rows?: { Row?: QBRow[] };
  Summary?: { ColData?: QBColData[] };
  ColData?: QBColData[];
}

/**
 * Top-level QB report response.
 */
export interface QBReportResponse {
  Header?: {
    ReportName?: string;
    StartPeriod?: string;
    EndPeriod?: string;
    ReportBasis?: string;
    Currency?: string;
    Time?: string;
    [key: string]: unknown;
  };
  Columns?: { Column?: QBColumn[] };
  Rows?: { Row?: QBRow[] };
}

/**
 * A single flattened data row with its section path and column values.
 */
export interface FlatRow {
  /** Path of section labels leading to this row, outermost first. */
  path: string[];
  /** Account or item name (first column value). */
  account: string;
  /** Optional QB ID reference from the first column. */
  id?: string;
  /** Values keyed by column title. */
  values: Record<string, string>;
}

/**
 * Normalized report response with three views of the data.
 */
export interface NormalizedReport {
  /** Top-level section totals, keyed by group name or section label. */
  summary: Record<string, number>;
  /** Flat list of every leaf row with its section path. */
  flat: FlatRow[];
  /** Original QB response tree, preserved for edge cases. */
  raw: QBReportResponse;
  /** Header metadata (period, basis, currency). */
  meta: Record<string, unknown>;
}

/**
 * Parses a string value into a number, handling currency formatting and empty strings.
 * Returns null if the value cannot be parsed.
 */
function parseAmount(value: string | undefined): number | null {
  if (!value) return null;
  // Strip commas, currency symbols, and parentheses (negative accounting format)
  const cleaned = value.replace(/[,$]/g, "").trim();
  if (!cleaned) return null;
  // Parentheses indicate negative numbers in accounting format
  const isNegative = /^\(.*\)$/.test(cleaned);
  const stripped = cleaned.replace(/[()]/g, "");
  const n = parseFloat(stripped);
  if (isNaN(n)) return null;
  return isNegative ? -n : n;
}

/**
 * Normalizes a QB report response into a format that is easier to consume.
 *
 * QB reports return a deeply nested `Header/Columns/Rows` tree that's identical in
 * structure across all report types. This walker flattens that tree into three views:
 *
 * - `summary` — top-level section totals keyed by group name (Income, Expenses, NetIncome, etc.)
 * - `flat` — every leaf data row with its section path and column values
 * - `raw` — the original tree preserved for edge cases
 *
 * @param response - The raw QB report response from node-quickbooks.
 * @returns Normalized report with summary, flat rows, raw tree, and metadata.
 */
export function normalizeReport(response: QBReportResponse): NormalizedReport {
  const columns = (response.Columns?.Column ?? []).map((c) => c.ColTitle ?? "");
  const summary: Record<string, number> = {};
  const flat: FlatRow[] = [];

  function walk(rows: QBRow[], path: string[]): void {
    for (const row of rows) {
      if (row.type === "Section") {
        // Section label comes from Header.ColData[0] or the `group` field
        const label = row.Header?.ColData?.[0]?.value ?? row.group ?? "Unknown";

        // Capture top-level section totals into summary
        if (path.length === 0 && row.Summary?.ColData) {
          const total = row.Summary.ColData[row.Summary.ColData.length - 1]?.value;
          const amount = parseAmount(total);
          if (amount !== null) {
            const key = row.group ?? label.replace(/^Total\s+/, "");
            summary[key] = amount;
          }
        }

        // Recurse into nested rows
        if (row.Rows?.Row) {
          walk(row.Rows.Row, [...path, label]);
        }
      } else if (row.type === "Data" || (row.ColData && !row.type)) {
        // Leaf row — extract column values
        const colData = row.ColData ?? [];
        const account = colData[0]?.value ?? "";
        const values: Record<string, string> = {};
        for (let i = 1; i < colData.length; i++) {
          const colName = columns[i] || `col${i}`;
          values[colName] = colData[i]?.value ?? "";
        }
        flat.push({
          path,
          account,
          id: colData[0]?.id,
          values,
        });
      }
    }
  }

  walk(response.Rows?.Row ?? [], []);

  return {
    summary,
    flat,
    raw: response,
    meta: response.Header ?? {},
  };
}
