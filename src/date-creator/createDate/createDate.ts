import { createDateFactory } from '../createDateFactory/createDateFactory.ts';
import defaultDayjs from '../createDateFactory/dayjs.ts';
import type { CreateDateFactoryReturn } from '../createDateFactory/createDateFactory.ts';

/**
 * Preconfigured date factory instance using the default Dayjs setup.
 *
 * This instance is shared internally to provide a consistent date API
 * without requiring users to configure Dayjs manually.
 */
const dateFactory: CreateDateFactoryReturn = createDateFactory(defaultDayjs);

/**
 * Default preconfigured createDate function.
 *
 * This is a ready-to-use version of `createDate` that uses a shared,
 * preconfigured Dayjs instance. No manual configuration is required.
 */
export const createDate = dateFactory.createDate;
