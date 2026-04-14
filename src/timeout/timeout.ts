/**
 * Creates a promise that resolves after a specified delay.
 *
 * Useful for pausing execution in async workflows,
 * throttling operations, or simulating delays in tests.
 *
 * @group Time
 *
 * @param milliseconds - Time to wait in milliseconds.
 * @param value - Optional value to resolve with.
 *
 * @returns A promise that resolves after the delay.
 *
 * @example
 * await timeout(1000);
 *
 * @example
 * const result = await timeout(1000, "done");
 * console.log(result); // "done"
 */
export function timeout<T = void>(milliseconds: number, value?: T): Promise<T> {
  if (milliseconds < 0) {
    return Promise.reject(new Error('Timeout duration must be >= 0'));
  }

  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(value as T), milliseconds);
  });
}
