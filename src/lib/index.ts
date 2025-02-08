export interface SocialProfile {
  name: string;
  url: string;
}

export interface TraveledPlaces {
  states: string[];
  countries: string[];
}

export interface Church {
  name: string;
  url: string;
}

export interface EmploymentInfo {
  company: string;
  role: string;
  org: string;
}

export const socialProfiles: SocialProfile[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/huangsam'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/samuel.c.huang'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/sambyte/'
  },
  {
    name: 'Wordpress',
    url: 'https://sambyte.wordpress.com/'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/s_c_huang'
  }
];

export const traveledPlaces: TraveledPlaces = {
  states: ['Oregon', 'Washington', 'Nevada', 'Wyoming', 'Ohio', 'Chicago'],
  countries: ['Taiwan', 'Mexico', 'Japan', 'Korea', 'Italy']
};

export const currentChurches: Church[] = [
  {
    name: 'Glorious Light Christian Church',
    url: 'https://glorious-light.net'
  },
  {
    name: 'Echo Church',
    url: 'https://echo.church'
  }
];

export const employmentInfo: EmploymentInfo = {
  company: 'Tesla',
  role: 'Software Engineer',
  org: 'Network Engineering'
};
