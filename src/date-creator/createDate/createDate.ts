import { createDateFactory } from '../createDateFactory/createDateFactory.ts';
import defaultDayjs from '../createDateFactory/dayjs.ts';

const { createDate } = createDateFactory(defaultDayjs);

/**
 * Default preconfigured `createDate` function using a shared Dayjs instance.
 *
 * Provides a ready-to-use API with UTC, timezone, and custom parsing support
 * without requiring users to configure Dayjs manually.
 *
 * @example
 * ```ts
 * createDate();
 * createDate('2024-01-01');
 * createDate('2024-01-01', undefined, { utc: true });
 * ```
 */
export { createDate };
