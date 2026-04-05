// src/reports/describe.ts
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { REPORTS, REPORTS_BY_ID, ReportMetadata } from "./report-metadata.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * A single parameter definition for a report query.
 * Extracted from Intuit's CodesModelsJsonObjects_v2.json.
 */
export interface ReportParamSchema {
  type: string;
  required: boolean;
  default?: string;
  description?: string;
}

/** Full parameter schema for a single report. */
export interface ReportSchema {
  required: string[];
  optional: string[];
  properties: Record<string, ReportParamSchema>;
}

type RawSchemas = Record<string, ReportSchema>;

// Load schemas once at module init
const SCHEMAS: RawSchemas = JSON.parse(
  readFileSync(join(__dirname, "report-schemas.json"), "utf-8"),
);

/**
 * Returns the list of all supported reports with their IDs and descriptions.
 * Use this when Claude needs to discover what reports are available.
 */
export function listReports(): Array<Pick<ReportMetadata, "id" | "title" | "description">> {
  return REPORTS.map((r) => ({
    id: r.id,
    title: r.title,
    description: r.description,
  }));
}

/**
 * Returns the full parameter schema for a specific report.
 * Includes all query parameters with types, defaults, and descriptions sourced
 * from Intuit's official developer portal JSON.
 *
 * @param reportId - The report ID (e.g. "profit_and_loss", "balance_sheet").
 * @returns Schema object with title, description, and parameters, or null if not found.
 */
export function describeReport(reportId: string): {
  id: string;
  title: string;
  description: string;
  parameters: Record<string, ReportParamSchema>;
  required: string[];
  optional: string[];
} | null {
  const meta = REPORTS_BY_ID[reportId];
  if (!meta) return null;

  const schema = SCHEMAS[meta.schemaKey];
  if (!schema) return null;

  return {
    id: meta.id,
    title: meta.title,
    description: meta.description,
    parameters: schema.properties,
    required: schema.required,
    optional: schema.optional,
  };
}

/**
 * Validates a params object against a report's schema.
 * Returns an array of error messages (empty if valid).
 */
export function validateReportParams(reportId: string, params: Record<string, unknown>): string[] {
  const meta = REPORTS_BY_ID[reportId];
  if (!meta) return [`Unknown report_id "${reportId}". Use list_reports to see valid IDs.`];

  const schema = SCHEMAS[meta.schemaKey];
  if (!schema) return [`No schema found for report "${reportId}".`];

  const errors: string[] = [];
  const allowed = new Set([...schema.required, ...schema.optional]);

  for (const key of Object.keys(params)) {
    if (!allowed.has(key)) {
      errors.push(`Unknown parameter "${key}" for report "${reportId}". Call describe_report to see valid parameters.`);
    }
  }

  for (const req of schema.required) {
    if (!(req in params)) {
      errors.push(`Missing required parameter "${req}" for report "${reportId}".`);
    }
  }

  return errors;
}
