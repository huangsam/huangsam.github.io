import { describe, it, expect } from 'vitest';

import { social } from '$lib/index.js';

describe('social links', () => {
  it('should not be empty', () => {
    expect(social.length).greaterThan(0);
  });
});
