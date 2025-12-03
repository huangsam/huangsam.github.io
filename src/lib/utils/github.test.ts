import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchRepos } from './github';

// Cache TTL for testing (24 hours in milliseconds)
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

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

describe('fetchRepos', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorageMock.clear();
  });

  it('fetches fresh data when no cache exists', async () => {
    const mockData = { items: [{ name: 'repo1' }, { name: 'repo2' }] };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });
    localStorageMock.getItem.mockReturnValue(null);

    const result = await fetchRepos('testuser');

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.github.com/search/repositories?q=user:testuser&sort=stars&order=desc&per_page=10',
    );
    expect(result).toEqual(mockData);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'repos_testuser',
      expect.stringContaining('"data":{"items":[{"name":"repo1"},{"name":"repo2"}]}'),
    );
  });

  it('returns cached data if within TTL', async () => {
    const cachedData = { items: [{ name: 'cached-repo' }] };
    const cacheValue = JSON.stringify({ data: cachedData, timestamp: Date.now() });
    localStorageMock.getItem.mockReturnValue(cacheValue);

    const result = await fetchRepos('testuser');

    expect(global.fetch).not.toHaveBeenCalled();
    expect(result).toEqual(cachedData);
  });

  it('fetches fresh data if cache is expired', async () => {
    const expiredCache = JSON.stringify({
      data: { items: [] },
      timestamp: Date.now() - CACHE_TTL_MS - 1,
    }); // Expired
    localStorageMock.getItem.mockReturnValue(expiredCache);
    const mockData = { items: [{ name: 'fresh-repo' }] };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const result = await fetchRepos('testuser');

    expect(global.fetch).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });

  it('throws error on API failure', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });
    localStorageMock.getItem.mockReturnValue(null);

    await expect(fetchRepos('testuser')).rejects.toThrow('API error: 404');
  });
});
