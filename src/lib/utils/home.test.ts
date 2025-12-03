import { describe, it, expect } from 'vitest';

import { places } from './home';

describe('home page', () => {
  it('should have two rendered places', () => {
    expect(places(['SF', 'NYC'])).toBe('SF, NYC');
  });

  it('should have one rendered place', () => {
    expect(places(['SF'])).toBe('SF');
  });

  it('should have no rendered place', () => {
    expect(places([])).toBe('No places found');
  });
});
