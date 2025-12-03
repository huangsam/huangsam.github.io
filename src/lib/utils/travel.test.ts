import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchCountryInfo, getStateInfo, formatPopulation } from './travel';
import { CACHE_TTL_MS } from './constants';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
});

// Mock fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('fetchCountryInfo', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorageMock.clear();
  });

  it('fetches fresh country data when no cache exists', async () => {
    const mockData = [
      {
        name: { common: 'Japan', official: 'Japan' },
        capital: ['Tokyo'],
        region: 'Asia',
        population: 125000000,
        flags: { png: 'flag.png', svg: 'flag.svg' },
        maps: { googleMaps: 'https://maps.google.com', openStreetMaps: 'https://osm.org' },
        timezones: ['UTC+09:00'],
      },
    ];
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });
    localStorageMock.getItem.mockReturnValue(null);

    const result = await fetchCountryInfo('Japan');

    expect(global.fetch).toHaveBeenCalledWith(
      'https://restcountries.com/v3.1/name/Japan?fullText=false',
    );
    expect(result).toEqual(mockData[0]);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'country_japan',
      expect.stringContaining('"data":'),
    );
  });

  it('returns cached data if within TTL', async () => {
    const cachedData = {
      name: { common: 'Taiwan', official: 'Republic of China (Taiwan)' },
      capital: ['Taipei'],
      region: 'Asia',
      population: 23000000,
      flags: { png: 'flag.png', svg: 'flag.svg' },
      maps: { googleMaps: 'https://maps.google.com', openStreetMaps: 'https://osm.org' },
      timezones: ['UTC+08:00'],
    };
    const cacheValue = JSON.stringify({ data: cachedData, timestamp: Date.now() });
    localStorageMock.getItem.mockReturnValue(cacheValue);

    const result = await fetchCountryInfo('Taiwan');

    expect(global.fetch).not.toHaveBeenCalled();
    expect(result).toEqual(cachedData);
  });

  it('fetches fresh data if cache is expired', async () => {
    const expiredCache = JSON.stringify({
      data: { name: { common: 'Old' } },
      timestamp: Date.now() - CACHE_TTL_MS - 1,
    }); // Expired
    localStorageMock.getItem.mockReturnValue(expiredCache);
    const mockData = [
      {
        name: { common: 'Korea', official: 'Republic of Korea' },
        capital: ['Seoul'],
        region: 'Asia',
        population: 51000000,
        flags: { png: 'flag.png', svg: 'flag.svg' },
        maps: { googleMaps: 'https://maps.google.com', openStreetMaps: 'https://osm.org' },
        timezones: ['UTC+09:00'],
      },
    ];
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const result = await fetchCountryInfo('Korea');

    expect(global.fetch).toHaveBeenCalled();
    expect(result).toEqual(mockData[0]);
  });

  it('returns null on API failure', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });
    localStorageMock.getItem.mockReturnValue(null);

    const result = await fetchCountryInfo('NonExistentCountry');

    expect(result).toBeNull();
  });

  it('returns null on network error', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));
    localStorageMock.getItem.mockReturnValue(null);

    const result = await fetchCountryInfo('SomeCountry');

    expect(result).toBeNull();
  });
});

describe('getStateInfo', () => {
  it('returns state data for Oregon', () => {
    const result = getStateInfo('Oregon');

    expect(result).not.toBeNull();
    expect(result?.name).toBe('Oregon');
    expect(result?.capital).toBe('Salem');
    expect(result?.nickname).toBe('The Beaver State');
  });

  it('returns state data for Hawaii', () => {
    const result = getStateInfo('Hawaii');

    expect(result).not.toBeNull();
    expect(result?.name).toBe('Hawaii');
    expect(result?.capital).toBe('Honolulu');
  });

  it('returns null for non-existent state', () => {
    const result = getStateInfo('NonExistentState');

    expect(result).toBeNull();
  });
});

describe('formatPopulation', () => {
  it('formats large populations in millions', () => {
    expect(formatPopulation(125000000)).toBe('125.0M');
    expect(formatPopulation(23456789)).toBe('23.5M');
  });

  it('formats medium populations in thousands', () => {
    expect(formatPopulation(576000)).toBe('576K');
    expect(formatPopulation(1500)).toBe('2K');
  });

  it('formats small populations as-is', () => {
    expect(formatPopulation(500)).toBe('500');
    expect(formatPopulation(100)).toBe('100');
  });
});
