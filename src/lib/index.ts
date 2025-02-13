/** Represents a social profile with a name and URL. */
interface SocialProfile {
  name: string;
  url: string;
}

/** Represents places traveled, including states and countries. */
interface TravelHistory {
  states: string[];
  countries: string[];
}

/** Represents a church with a name and URL. */
interface Church {
  name: string;
  url: string;
}

/** Represents employment info like company, role, and organization. */
interface EmploymentInfo {
  company: string;
  role: string;
  org: string;
}

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/huangsam',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/samuel.c.huang',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/sambyte/',
  },
  {
    name: 'Wordpress',
    url: 'https://sambyte.wordpress.com/',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/s_c_huang',
  },
];

export const TRAVEL_HISTORY: TravelHistory = {
  states: ['Oregon', 'Washington', 'Nevada', 'Wyoming', 'Ohio', 'Chicago', 'Utah'],
  countries: ['Taiwan', 'Mexico', 'Japan', 'Korea', 'Italy'],
};

export const CURRENT_CHURCHES: Church[] = [
  {
    name: 'Glorious Light Christian Church',
    url: 'https://glorious-light.net',
  },
  {
    name: 'Echo Church',
    url: 'https://echo.church',
  },
];

export const EMPLOYMENT_INFO: EmploymentInfo = {
  company: 'Tesla',
  role: 'Software Engineer',
  org: 'Network Engineering',
};
