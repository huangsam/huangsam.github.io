/**
 * Joins an array of strings into a single string, with each element separated
 * by a comma and a space.
 */
export function places(arr: string[]): string {
  if (arr.length == 0) {
    return 'No places found';
  }
  return arr.join(', ');
}
