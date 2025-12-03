import { describe, it, expect } from 'vitest';
import { CACHE_TTL_MS } from './constants';

describe('constants', () => {
  it('should have correct CACHE_TTL_MS value (24 hours in milliseconds)', () => {
    const expectedValue = 24 * 60 * 60 * 1000; // 86400000
    expect(CACHE_TTL_MS).toBe(expectedValue);
    expect(CACHE_TTL_MS).toBe(86400000);
  });
});
