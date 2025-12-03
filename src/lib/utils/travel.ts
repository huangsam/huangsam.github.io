/** Interface for country data from REST Countries API */
interface CountryData {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  timezones: string[];
}

/** Interface for US state data */
interface StateData {
  name: string;
  capital: string;
  nickname: string;
  population: number;
  region: string;
  wikipedia: string;
  touristInfo: string;
}

/** Mapping of US states to their data */
const US_STATES_DATA: Record<string, StateData> = {
  Oregon: {
    name: 'Oregon',
    capital: 'Salem',
    nickname: 'The Beaver State',
    population: 4237000,
    region: 'Pacific Northwest',
    wikipedia: 'https://en.wikipedia.org/wiki/Oregon',
    touristInfo: 'https://traveloregon.com/',
  },
  Washington: {
    name: 'Washington',
    capital: 'Olympia',
    nickname: 'The Evergreen State',
    population: 7739000,
    region: 'Pacific Northwest',
    wikipedia: 'https://en.wikipedia.org/wiki/Washington_(state)',
    touristInfo: 'https://www.visitseattle.org/',
  },
  Nevada: {
    name: 'Nevada',
    capital: 'Carson City',
    nickname: 'The Silver State',
    population: 3104000,
    region: 'Western United States',
    wikipedia: 'https://en.wikipedia.org/wiki/Nevada',
    touristInfo: 'https://travelnevada.com/',
  },
  Wyoming: {
    name: 'Wyoming',
    capital: 'Cheyenne',
    nickname: 'The Equality State',
    population: 576000,
    region: 'Mountain West',
    wikipedia: 'https://en.wikipedia.org/wiki/Wyoming',
    touristInfo: 'https://www.wyomingtourism.org/',
  },
  Ohio: {
    name: 'Ohio',
    capital: 'Columbus',
    nickname: 'The Buckeye State',
    population: 11800000,
    region: 'Midwest',
    wikipedia: 'https://en.wikipedia.org/wiki/Ohio',
    touristInfo: 'https://www.ohio.org/',
  },
  Chicago: {
    name: 'Illinois',
    capital: 'Springfield',
    nickname: 'Land of Lincoln',
    population: 12800000,
    region: 'Midwest',
    wikipedia: 'https://en.wikipedia.org/wiki/Illinois',
    touristInfo: 'https://www.enjoyillinois.com/',
  },
  Utah: {
    name: 'Utah',
    capital: 'Salt Lake City',
    nickname: 'The Beehive State',
    population: 3380000,
    region: 'Mountain West',
    wikipedia: 'https://en.wikipedia.org/wiki/Utah',
    touristInfo: 'https://www.visitutah.com/',
  },
  Hawaii: {
    name: 'Hawaii',
    capital: 'Honolulu',
    nickname: 'The Aloha State',
    population: 1440000,
    region: 'Pacific',
    wikipedia: 'https://en.wikipedia.org/wiki/Hawaii',
    touristInfo: 'https://www.gohawaii.com/',
  },
};

import { CACHE_TTL_MS } from './constants';

/** Fetches country information from REST Countries API with 24-hour caching */
export async function fetchCountryInfo(countryName: string): Promise<CountryData | null> {
  const cacheKey = `country_${countryName.toLowerCase()}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL_MS) {
      return data;
    }
  }

  try {
    // Fetch fresh data from REST Countries API
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=false`,
    );
    if (!response.ok) {
      console.error(`API error for ${countryName}: ${response.status}`);
      return null;
    }
    const data = await response.json();

    // Get the first matching country
    const countryData = data[0] as CountryData;

    // Cache it
    localStorage.setItem(cacheKey, JSON.stringify({ data: countryData, timestamp: Date.now() }));
    return countryData;
  } catch (error) {
    console.error(`Error fetching country info for ${countryName}:`, error);
    return null;
  }
}

/** Gets US state information from local data */
export function getStateInfo(stateName: string): StateData | null {
  return US_STATES_DATA[stateName] || null;
}

/** Helper to format population numbers */
export function formatPopulation(pop: number): string {
  if (pop >= 1000000) {
    return `${(pop / 1000000).toFixed(1)}M`;
  } else if (pop >= 1000) {
    return `${(pop / 1000).toFixed(0)}K`;
  }
  return pop.toString();
}
