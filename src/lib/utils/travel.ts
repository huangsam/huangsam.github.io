/** Interface for US state information */
export interface StateInfo {
  name: string;
  nickname: string;
  wikipedia: string;
  touristInfo: string;
}

/** Interface for country information */
export interface CountryInfo {
  name: string;
  flag: string;
  wikipedia: string;
  touristInfo: string;
}

/** Mapping of US states to their static details */
const US_STATES_DATA: Record<string, StateInfo> = {
  Oregon: {
    name: 'Oregon',
    nickname: 'The Beaver State',
    wikipedia: 'https://en.wikipedia.org/wiki/Oregon',
    touristInfo: 'https://traveloregon.com/',
  },
  Washington: {
    name: 'Washington',
    nickname: 'The Evergreen State',
    wikipedia: 'https://en.wikipedia.org/wiki/Washington_(state)',
    touristInfo: 'https://www.visitseattle.org/',
  },
  Nevada: {
    name: 'Nevada',
    nickname: 'The Silver State',
    wikipedia: 'https://en.wikipedia.org/wiki/Nevada',
    touristInfo: 'https://travelnevada.com/',
  },
  Wyoming: {
    name: 'Wyoming',
    nickname: 'The Equality State',
    wikipedia: 'https://en.wikipedia.org/wiki/Wyoming',
    touristInfo: 'https://www.wyomingtourism.org/',
  },
  Ohio: {
    name: 'Ohio',
    nickname: 'The Buckeye State',
    wikipedia: 'https://en.wikipedia.org/wiki/Ohio',
    touristInfo: 'https://www.ohio.org/',
  },
  Illinois: {
    name: 'Illinois',
    nickname: 'Land of Lincoln',
    wikipedia: 'https://en.wikipedia.org/wiki/Illinois',
    touristInfo: 'https://www.enjoyillinois.com/',
  },
  Utah: {
    name: 'Utah',
    nickname: 'The Beehive State',
    wikipedia: 'https://en.wikipedia.org/wiki/Utah',
    touristInfo: 'https://www.visitutah.com/',
  },
  Hawaii: {
    name: 'Hawaii',
    nickname: 'The Aloha State',
    wikipedia: 'https://en.wikipedia.org/wiki/Hawaii',
    touristInfo: 'https://www.gohawaii.com/',
  },
};

/** Mapping of countries to their static details */
const COUNTRIES_DATA: Record<string, CountryInfo> = {
  Taiwan: {
    name: 'Taiwan',
    flag: '🇹🇼',
    wikipedia: 'https://en.wikipedia.org/wiki/Taiwan',
    touristInfo: 'https://eng.taiwan.net.tw/',
  },
  Mexico: {
    name: 'Mexico',
    flag: '🇲🇽',
    wikipedia: 'https://en.wikipedia.org/wiki/Mexico',
    touristInfo: 'https://www.lonelyplanet.com/mexico',
  },
  Japan: {
    name: 'Japan',
    flag: '🇯🇵',
    wikipedia: 'https://en.wikipedia.org/wiki/Japan',
    touristInfo: 'https://www.japan.travel/en/',
  },
  Korea: {
    name: 'Korea',
    flag: '🇰🇷',
    wikipedia: 'https://en.wikipedia.org/wiki/South_Korea',
    touristInfo: 'https://english.visitkorea.or.kr/',
  },
  Italy: {
    name: 'Italy',
    flag: '🇮🇹',
    wikipedia: 'https://en.wikipedia.org/wiki/Italy',
    touristInfo: 'https://www.italia.it/en',
  },
};

/** Gets US state information from local data */
export function getStateInfo(stateName: string): StateInfo | null {
  return US_STATES_DATA[stateName] ?? null;
}

/** Gets country information from local data */
export function getCountryInfo(countryName: string): CountryInfo | null {
  return COUNTRIES_DATA[countryName] ?? null;
}
