import { describe, it, expect } from 'vitest';

import { EMPLOYMENT_INFO, SKILLS, SOCIAL_PROFILES, TRAVEL_HISTORY } from '$lib/index';

describe('personal site', () => {
  it('should have social profiles', () => {
    expect(SOCIAL_PROFILES.length).greaterThan(0);
  });

  it('should have traveled places', () => {
    expect(TRAVEL_HISTORY.states.length).greaterThan(0);
    expect(TRAVEL_HISTORY.countries.length).greaterThan(0);
  });

  it('should have employment info', () => {
    expect(EMPLOYMENT_INFO.company).not.toBe('');
    expect(EMPLOYMENT_INFO.role).not.toBe('');
    expect(EMPLOYMENT_INFO.org).not.toBe('');
  });

  it('should have skills', () => {
    expect(SKILLS.length).greaterThan(0);
  });
});
