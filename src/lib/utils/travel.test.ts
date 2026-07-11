import { describe, it, expect } from 'vitest';
import { getCountryInfo, getStateInfo } from './travel';

describe('getCountryInfo', () => {
  it('returns country data for Japan', () => {
    const result = getCountryInfo('Japan');

    expect(result).not.toBeNull();
    expect(result?.name).toBe('Japan');
    expect(result?.flag).toBe('🇯🇵');
    expect(result?.wikipedia).toContain('Japan');
    expect(result?.touristInfo).toContain('japan.travel');
  });

  it('returns country data for Taiwan', () => {
    const result = getCountryInfo('Taiwan');

    expect(result).not.toBeNull();
    expect(result?.name).toBe('Taiwan');
    expect(result?.flag).toBe('🇹🇼');
    expect(result?.touristInfo).toContain('taiwan.net.tw');
  });

  it('returns null for non-existent country', () => {
    const result = getCountryInfo('NonExistentCountry');

    expect(result).toBeNull();
  });
});

describe('getStateInfo', () => {
  it('returns state data for Oregon', () => {
    const result = getStateInfo('Oregon');

    expect(result).not.toBeNull();
    expect(result?.name).toBe('Oregon');
    expect(result?.nickname).toBe('The Beaver State');
    expect(result?.touristInfo).toContain('traveloregon.com');
  });

  it('returns state data for Hawaii', () => {
    const result = getStateInfo('Hawaii');

    expect(result).not.toBeNull();
    expect(result?.name).toBe('Hawaii');
    expect(result?.nickname).toBe('The Aloha State');
    expect(result?.touristInfo).toContain('gohawaii.com');
  });

  it('returns null for non-existent state', () => {
    const result = getStateInfo('NonExistentState');

    expect(result).toBeNull();
  });
});
