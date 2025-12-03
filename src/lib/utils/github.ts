import { CACHE_TTL_MS } from './constants';

/** Fetches the top 10 GitHub repositories for a given user, with caching for 24 hours. */
export async function fetchRepos(username: string) {
  const cacheKey = `repos_${username}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL_MS) {
      return data;
    }
  }

  // Fetch fresh data
  const response = await fetch(
    `https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc&per_page=10`,
  );
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const data = await response.json();

  // Cache it
  localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
  return data;
}
