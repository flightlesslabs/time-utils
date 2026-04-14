import type { ConfigType } from 'dayjs';

/**
 * Supported input types for creating a date.
 *
 * Includes all native Dayjs-compatible input types such as:
 * string, number, Date, Dayjs instance, etc.
 */
export type CreateDateInput = ConfigType;

/**
 * Optional format string used when parsing a date.
 *
 * If provided, Dayjs will parse the input using this format.
 */
export type CreateDateFormat = string | undefined;

/**
 * Options controlling how a date is parsed and interpreted.
 */
export interface CreateDateOptions {
  /**
   * Timezone identifier (e.g., "Asia/Kolkata").
   * Requires Dayjs timezone plugin.
   */
  timezone?: string;

  /**
   * Forces UTC parsing.
   * Takes priority over `timezone`.
   */
  utc?: boolean;

  /**
   * Enables strict parsing mode.
   * When true, input must exactly match the format.
   */
  strict?: boolean;

  /**
   * If true, throws an error when the parsed date is invalid.
   */
  throwOnInvalid?: boolean;
}
