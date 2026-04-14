import { assert, assertEquals } from '@std/assert';
import { createDateFactory } from './createDateFactory.ts';

Deno.test('creates valid date', () => {
  const { createDate } = createDateFactory();

  assert(createDate().isValid());
});

Deno.test('parses ISO string', () => {
  const { createDate } = createDateFactory();

  const date = createDate('2025-01-01');

  assert(date.isValid());
  assertEquals(date.year(), 2025);
});

Deno.test('parses formatted date', () => {
  const { createDate } = createDateFactory();

  const date = createDate('01-02-2025', 'DD-MM-YYYY');

  assert(date.isValid());
});

Deno.test('strict mode rejects invalid format', () => {
  const { createDate } = createDateFactory();

  const date = createDate('1-2-2025', 'DD-MM-YYYY', {
    strict: true,
  });

  assert(date.isValid() === false);
});

Deno.test('throws on invalid date when enabled', () => {
  const { createDate } = createDateFactory();

  let threw = false;

  try {
    createDate('invalid', undefined, { throwOnInvalid: true });
  } catch {
    threw = true;
  }

  assert(threw);
});
