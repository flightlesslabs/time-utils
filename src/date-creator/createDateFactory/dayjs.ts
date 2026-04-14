import dayjsFactory from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';
import timezonePlugin from 'dayjs/plugin/timezone.js';
import customParseFormatPlugin from 'dayjs/plugin/customParseFormat.js';
import isBetweenPlugin from 'dayjs/plugin/isBetween.js';

const dayjs = dayjsFactory as typeof dayjsFactory;

// default plugin setup

/**
 * Preconfigured Dayjs instance with commonly used plugins enabled.
 *
 * Enabled plugins:
 * - UTC support
 * - Timezone support
 * - Custom parsing formats
 * - Range checking (`isBetween`)
 *
 * This instance is intended to be shared across the application to ensure
 * consistent date handling behavior.
 *
 * @example
 * ```ts
 * import dayjs from './dayjs';
 *
 * dayjs().utc();
 * dayjs().tz('Asia/Kolkata');
 * dayjs('2024-01-01', 'YYYY-MM-DD', true);
 * ```
 */
dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);
dayjs.extend(customParseFormatPlugin);
dayjs.extend(isBetweenPlugin);

export default dayjs;
