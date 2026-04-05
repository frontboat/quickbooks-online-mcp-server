// src/reports/run.ts
import { quickbooksClient } from "../clients/quickbooks-client.js";
import { REPORTS_BY_ID } from "./report-metadata.js";
import { normalizeReport, NormalizedReport, QBReportResponse } from "./normalize.js";
import { validateReportParams } from "./describe.js";

/**
 * Runs a QuickBooks report with the given parameters.
 *
 * Validates params against the report's schema, calls the appropriate
 * node-quickbooks method, and normalizes the response into a consumable shape.
 *
 * @param reportId - The report ID (e.g. "profit_and_loss").
 * @param params - Report parameters (date_macro, start_date, columns, etc.)
 * @returns Normalized report with summary, flat rows, raw tree, and metadata.
 * @throws Error if the report ID is invalid, params fail validation, or the QB API call fails.
 */
export async function runReport(
  reportId: string,
  params: Record<string, unknown> = {},
): Promise<NormalizedReport> {
  const meta = REPORTS_BY_ID[reportId];
  if (!meta) {
    throw new Error(
      `Unknown report_id "${reportId}". Call describe_report (no args) to see valid IDs.`,
    );
  }

  const errors = validateReportParams(reportId, params);
  if (errors.length > 0) {
    throw new Error(
      `Invalid parameters for report "${reportId}":\n- ${errors.join("\n- ")}`,
    );
  }

  await quickbooksClient.authenticate();
  const qb = quickbooksClient.getQuickbooks();

  const response = await new Promise<QBReportResponse>((resolve, reject) => {
    (qb as any)[meta.qbMethod](params, (err: unknown, result: QBReportResponse) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

  return normalizeReport(response);
}
