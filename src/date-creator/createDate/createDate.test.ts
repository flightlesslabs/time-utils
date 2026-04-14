import { assert, assertEquals } from '@std/assert';
import { createDate } from './createDate.ts';

Deno.test('creates current date', () => {
  const now = createDate();

  assert(now.isValid());
});

Deno.test('parses ISO and formatted dates', () => {
  const iso = createDate('2025-01-01');
  const formatted = createDate('01-02-2025', 'DD-MM-YYYY');

  assert(iso.isValid());
  assert(formatted.isValid());

  assertEquals(formatted.year(), 2025);
});

Deno.test('respects strict mode', () => {
  const valid = createDate('01-02-2025', 'DD-MM-YYYY', { strict: true });
  const invalid = createDate('1-2-2025', 'DD-MM-YYYY', { strict: true });

  assert(valid.isValid());
  assert(invalid.isValid() === false);
});

Deno.test('throws on invalid input when enabled', () => {
  let threw = false;

  try {
    createDate('invalid-date', undefined, { throwOnInvalid: true });
  } catch {
    threw = true;
  }

  assert(threw);
});

Deno.test('UTC takes priority over timezone', () => {
  const date = createDate('2025-01-01T00:00:00Z', undefined, {
    utc: true,
    timezone: 'Asia/Kolkata',
  });

  assert(date.isUTC());
});
