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
  yearFounded: number;
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
    yearFounded: 1859,
  },
  Washington: {
    name: 'Washington',
    capital: 'Olympia',
    nickname: 'The Evergreen State',
    population: 7739000,
    region: 'Pacific Northwest',
    wikipedia: 'https://en.wikipedia.org/wiki/Washington_(state)',
    touristInfo: 'https://www.visitseattle.org/',
    yearFounded: 1889,
  },
  Nevada: {
    name: 'Nevada',
    capital: 'Carson City',
    nickname: 'The Silver State',
    population: 3104000,
    region: 'Western United States',
    wikipedia: 'https://en.wikipedia.org/wiki/Nevada',
    touristInfo: 'https://travelnevada.com/',
    yearFounded: 1864,
  },
  Wyoming: {
    name: 'Wyoming',
    capital: 'Cheyenne',
    nickname: 'The Equality State',
    population: 576000,
    region: 'Mountain West',
    wikipedia: 'https://en.wikipedia.org/wiki/Wyoming',
    touristInfo: 'https://www.wyomingtourism.org/',
    yearFounded: 1890,
  },
  Ohio: {
    name: 'Ohio',
    capital: 'Columbus',
    nickname: 'The Buckeye State',
    population: 11800000,
    region: 'Midwest',
    wikipedia: 'https://en.wikipedia.org/wiki/Ohio',
    touristInfo: 'https://www.ohio.org/',
    yearFounded: 1803,
  },
  Illinois: {
    name: 'Illinois',
    capital: 'Springfield',
    nickname: 'Land of Lincoln',
    population: 12800000,
    region: 'Midwest',
    wikipedia: 'https://en.wikipedia.org/wiki/Illinois',
    touristInfo: 'https://www.enjoyillinois.com/',
    yearFounded: 1818,
  },
  Utah: {
    name: 'Utah',
    capital: 'Salt Lake City',
    nickname: 'The Beehive State',
    population: 3380000,
    region: 'Mountain West',
    wikipedia: 'https://en.wikipedia.org/wiki/Utah',
    touristInfo: 'https://www.visitutah.com/',
    yearFounded: 1896,
  },
  Hawaii: {
    name: 'Hawaii',
    capital: 'Honolulu',
    nickname: 'The Aloha State',
    population: 1440000,
    region: 'Pacific',
    wikipedia: 'https://en.wikipedia.org/wiki/Hawaii',
    touristInfo: 'https://www.gohawaii.com/',
    yearFounded: 1959,
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
      return null; // Return null on API error
    }
    const data = await response.json();

    // Get the first matching country
    const countryData = data[0] as CountryData;

    // Cache it
    localStorage.setItem(cacheKey, JSON.stringify({ data: countryData, timestamp: Date.now() }));
    return countryData;
  } catch {
    return null; // Return null on network or other errors
  }
}

/** Gets US state information from local data */
export function getStateInfo(stateName: string): StateData | null {
  return US_STATES_DATA[stateName] || null;
}
