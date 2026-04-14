import { createDateFactory } from '../createDateFactory/createDateFactory.ts';
import defaultDayjs from '../createDateFactory/dayjs.ts';

const dateFactory = createDateFactory(defaultDayjs);

/**
 * Default preconfigured createDate function.
 *
 * This is a ready-to-use version of `createDate` that uses a shared,
 * preconfigured Dayjs instance. No manual configuration is required.
 */
export const createDate = dateFactory.createDate;
