import { describe, it, expect } from 'vitest';

import { SOCIAL_PROFILES, TRAVEL_HISTORY, CURRENT_CHURCHES, EMPLOYMENT_INFO } from '$lib/index';

describe('personal site', () => {
  it('should have social profiles', () => {
    expect(SOCIAL_PROFILES.length).greaterThan(0);
  });

  it('should have traveled places', () => {
    expect(TRAVEL_HISTORY.states.length).greaterThan(0);
    expect(TRAVEL_HISTORY.countries.length).greaterThan(0);
  });

  it('should have current churches', () => {
    expect(CURRENT_CHURCHES.length).greaterThan(0);
  });

  it('should have employment info', () => {
    expect(EMPLOYMENT_INFO).toHaveProperty('company');
    expect(EMPLOYMENT_INFO).toHaveProperty('role');
    expect(EMPLOYMENT_INFO).toHaveProperty('org');
  });
});
