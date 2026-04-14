import defaultDayjs from './dayjs.ts';
import type {
  CreateDateFormat,
  CreateDateInput,
  CreateDateOptions,
} from './types.ts';

type Dayjs = typeof defaultDayjs;

/**
 * Return type of `createDateFactory`.
 *
 * Contains the unified date creation function and the underlying Dayjs instance.
 */
export type CreateDateFactoryReturn = {
  /**
   * Unified date creation function.
   *
   * Overloads:
   * - `createDate()` → current date/time
   * - `createDate(input, format?, options?)` → parsed date
   */
  createDate: {
    (): ReturnType<Dayjs>;
    (
      date: CreateDateInput,
      format?: CreateDateFormat,
      options?: CreateDateOptions,
    ): ReturnType<Dayjs>;
  };

  /**
   * Underlying Dayjs instance used by this factory.
   */
  dayjs: Dayjs;
};

/**
 * Creates a date factory bound to a specific Dayjs instance.
 *
 * This factory wraps a configured Dayjs instance and provides a unified
 * `createDate` function that supports:
 *
 * - UTC parsing (highest priority)
 * - Timezone-aware parsing
 * - Local parsing
 * - Optional strict parsing
 * - Optional invalid-date throwing
 *
 * @param customDayjs - Optional custom Dayjs instance (useful for testing or plugin overrides)
 *
 * @returns A factory object containing:
 * - `createDate`: Unified date creation function
 * - `dayjs`: The underlying Dayjs instance used by the factory
 *
 * @example
 * ```ts
 * const { createDate } = createDateFactory();
 *
 * const now = createDate();
 * const date = createDate('2024-01-01');
 * const utcDate = createDate('2024-01-01', undefined, { utc: true });
 * const tzDate = createDate('2024-01-01', undefined, { timezone: 'Asia/Kolkata' });
 * ```
 */
export function createDateFactory(
  customDayjs?: Dayjs,
): CreateDateFactoryReturn {
  const d = customDayjs ?? defaultDayjs;

  function createDate(): ReturnType<Dayjs>;
  function createDate(
    date: CreateDateInput,
    format?: CreateDateFormat,
    options?: CreateDateOptions,
  ): ReturnType<Dayjs>;

  function createDate(
    date?: CreateDateInput,
    format?: CreateDateFormat,
    options: CreateDateOptions = {},
  ) {
    const { timezone, utc, strict = false, throwOnInvalid = false } = options;

    const input = date ?? undefined;

    let instance: ReturnType<Dayjs>;

    // 1. UTC takes highest priority
    if (utc) {
      instance = format ? d.utc(input, format, strict) : d.utc(input);
    } // 2. Timezone
    else if (timezone) {
      instance = format ? d.tz(input, format, timezone) : d.tz(input, timezone);
    } // 3. Local
    else {
      instance = format ? d(input, format, strict) : d(input);
    }

    // 4. Validation
    if (throwOnInvalid && !instance.isValid()) {
      throw new Error('Invalid date input');
    }

    return instance;
  }

  return {
    createDate,
    dayjs: d,
  };
}
