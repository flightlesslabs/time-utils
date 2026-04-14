import { createDateFactory } from '../createDateFactory/createDateFactory.ts';
import defaultDayjs from '../createDateFactory/dayjs.ts';

const { createDate } = createDateFactory(defaultDayjs);

export const createDateExport = createDate;
