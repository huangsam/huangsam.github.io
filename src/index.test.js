import { describe, it, expect } from 'vitest';

import { socialProfiles, traveledPlaces, currentChurches, employmentInfo } from '$lib/index.js';

describe('personal site', () => {
  it('should have social profiles', () => {
    expect(socialProfiles.length).greaterThan(0);
  });

  it('should have traveled places', () => {
    expect(traveledPlaces.states.length).greaterThan(0);
    expect(traveledPlaces.countries.length).greaterThan(0);
  });

  it('should have current churches', () => {
    expect(currentChurches.length).greaterThan(0);
  });

  it('should have employment info', () => {
    expect(employmentInfo).toHaveProperty('company');
    expect(employmentInfo).toHaveProperty('role');
    expect(employmentInfo).toHaveProperty('org');
  });
});
