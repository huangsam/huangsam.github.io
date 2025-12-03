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

/** Represents a skill with name and proficiency level. */
interface Skill {
  name: string;
  level: number; // 1-100
}

/** Personal and professional information. */
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

/** Detailed travel history including states and countries visited. */
export const TRAVEL_HISTORY: TravelHistory = {
  states: ['Oregon', 'Washington', 'Nevada', 'Wyoming', 'Ohio', 'Chicago', 'Utah'],
  countries: ['Taiwan', 'Mexico', 'Japan', 'Korea', 'Italy'],
};

/** List of current churches attended. */
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

/** Current employment information. */
export const EMPLOYMENT_INFO: EmploymentInfo = {
  company: 'Tesla',
  role: 'Software Engineer',
  org: 'Network Engineering',
};

/** List of technical skills with proficiency levels. */
export const SKILLS: Skill[] = [
  { name: 'Python', level: 95 },
  { name: 'Go', level: 95 },
  { name: 'Java', level: 90 },
  { name: 'Linux', level: 95 },
  { name: 'Cloud Computing', level: 90 },
];
