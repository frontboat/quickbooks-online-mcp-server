// src/helpers/client-coerce.ts
import { z } from "zod";

/**
 * Wraps a Zod schema so it ALSO accepts the JSON-string form of its input.
 *
 * Background: Claude Code's MCP client JSON-stringifies every non-string tool
 * argument before sending it to the server — objects, arrays, numbers, and
 * booleans all arrive at the server as JSON strings. Only string-typed fields
 * pass through untouched. This breaks any Zod schema that expects a structural
 * or numeric type directly.
 *
 * This helper wraps the real schema in a union: either the native type (for
 * well-behaved clients) or a JSON string that is decoded via `z.codec` into
 * the real type before validation runs. Output types, constraints, defaults,
 * and refinements on the inner schema are all preserved, so handlers receive
 * properly-typed values regardless of which path the client takes.
 *
 * @example
 * ```ts
 * const inputSchema = {
 *   params: jsonOrNative(z.looseObject({})).optional(),
 *   limit: jsonOrNative(z.number().int().min(1).max(1000)).default(100),
 *   criteria: jsonOrNative(z.array(z.object({ field: z.string() }))).optional(),
 * };
 * ```
 */
export function jsonOrNative<T extends z.ZodType>(schema: T) {
  return z.union([
    z.codec(z.string(), schema, {
      decode: (str, ctx) => {
        try {
          return JSON.parse(str);
        } catch (err) {
          const message =
            err instanceof Error ? err.message : "Invalid JSON";
          ctx.issues.push({
            code: "invalid_format",
            format: "json",
            input: str,
            message,
          });
          return z.NEVER;
        }
      },
      encode: (value) => JSON.stringify(value),
    }),
    schema,
  ]);
}
