/** Represents a social profile with a name and URL. */
interface SocialProfile {
  name: string;
  url: string;
}

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

/** Represents places traveled, including states and countries. */
export interface TravelHistory {
  states: StateInfo[];
  countries: CountryInfo[];
}

/** Represents employment info like company, role, and organization. */
interface EmploymentInfo {
  company: string;
  role: string;
  org: string;
}

/** Represents a core focus area or architectural domain. */
interface FocusArea {
  name: string;
  description: string;
  technologies: string[];
}

/** Personal and professional information. */
export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/huangsam',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/sambyte/',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/s_c_huang',
  },
];

/** Detailed travel history including states and countries visited. */
export const TRAVEL_HISTORY: TravelHistory = {
  states: [
    {
      name: 'Oregon',
      nickname: 'The Beaver State',
      wikipedia: 'https://en.wikipedia.org/wiki/Oregon',
      touristInfo: 'https://traveloregon.com/',
    },
    {
      name: 'Washington',
      nickname: 'The Evergreen State',
      wikipedia: 'https://en.wikipedia.org/wiki/Washington_(state)',
      touristInfo: 'https://www.visitseattle.org/',
    },
    {
      name: 'Nevada',
      nickname: 'The Silver State',
      wikipedia: 'https://en.wikipedia.org/wiki/Nevada',
      touristInfo: 'https://travelnevada.com/',
    },
    {
      name: 'Wyoming',
      nickname: 'The Equality State',
      wikipedia: 'https://en.wikipedia.org/wiki/Wyoming',
      touristInfo: 'https://www.wyomingtourism.org/',
    },
    {
      name: 'Ohio',
      nickname: 'The Buckeye State',
      wikipedia: 'https://en.wikipedia.org/wiki/Ohio',
      touristInfo: 'https://www.ohio.org/',
    },
    {
      name: 'Illinois',
      nickname: 'Land of Lincoln',
      wikipedia: 'https://en.wikipedia.org/wiki/Illinois',
      touristInfo: 'https://www.enjoyillinois.com/',
    },
    {
      name: 'Utah',
      nickname: 'The Beehive State',
      wikipedia: 'https://en.wikipedia.org/wiki/Utah',
      touristInfo: 'https://www.visitutah.com/',
    },
    {
      name: 'Hawaii',
      nickname: 'The Aloha State',
      wikipedia: 'https://en.wikipedia.org/wiki/Hawaii',
      touristInfo: 'https://www.gohawaii.com/',
    },
  ],
  countries: [
    {
      name: 'Taiwan',
      flag: '🇹🇼',
      wikipedia: 'https://en.wikipedia.org/wiki/Taiwan',
      touristInfo: 'https://eng.taiwan.net.tw/',
    },
    {
      name: 'Mexico',
      flag: '🇲🇽',
      wikipedia: 'https://en.wikipedia.org/wiki/Mexico',
      touristInfo: 'https://www.lonelyplanet.com/mexico',
    },
    {
      name: 'Japan',
      flag: '🇯🇵',
      wikipedia: 'https://en.wikipedia.org/wiki/Japan',
      touristInfo: 'https://www.japan.travel/en/',
    },
    {
      name: 'Korea',
      flag: '🇰🇷',
      wikipedia: 'https://en.wikipedia.org/wiki/South_Korea',
      touristInfo: 'https://english.visitkorea.or.kr/',
    },
    {
      name: 'Italy',
      flag: '🇮🇹',
      wikipedia: 'https://en.wikipedia.org/wiki/Italy',
      touristInfo: 'https://www.italia.it/en',
    },
  ],
};

/** Current employment information. */
export const EMPLOYMENT_INFO: EmploymentInfo = {
  company: 'Tesla',
  role: 'Software Engineer',
  org: 'AI/IT Infra',
};

/** List of architectural focus areas. */
export const FOCUS_AREAS: FocusArea[] = [
  {
    name: 'High-Performance Systems',
    description: 'Building efficient, resource-optimized, and low-latency systems and tooling.',
    technologies: ['Go', 'Rust', 'Java', 'Linux'],
  },
  {
    name: 'Agentic Workflows',
    description:
      'Designing autonomous agent systems, prompt engineering pipelines, and MLOps for model deployment.',
    technologies: ['Python', 'LangChain', 'PyTorch'],
  },
  {
    name: 'Distributed Systems',
    description:
      'Architecting scalable, resilient, and fault-tolerant cloud-native infrastructure.',
    technologies: ['Kubernetes', 'gRPC', 'Kafka', 'OTel'],
  },
];
