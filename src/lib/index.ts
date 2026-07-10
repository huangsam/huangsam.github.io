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
  states: ['Oregon', 'Washington', 'Nevada', 'Wyoming', 'Ohio', 'Illinois', 'Utah', 'Hawaii'],
  countries: ['Taiwan', 'Mexico', 'Japan', 'Korea', 'Italy'],
};

/** Current employment information. */
export const EMPLOYMENT_INFO: EmploymentInfo = {
  company: 'Tesla',
  role: 'Software Engineer',
  org: 'Network Engineering',
};

/** List of architectural focus areas. */
export const FOCUS_AREAS: FocusArea[] = [
  {
    name: 'High-Performance Systems',
    description: 'Building efficient, resource-optimized, and low-latency systems and tooling.',
    technologies: ['Go', 'Rust', 'Java', 'Linux Systems'],
  },
  {
    name: 'Agentic Workflows & Local AI',
    description:
      'Designing autonomous agent systems, prompt engineering pipelines, and MLOps for model deployment.',
    technologies: ['Python', 'Ollama', 'LangChain', 'LlamaIndex', 'PyTorch'],
  },
  {
    name: 'Distributed Systems Architecture',
    description:
      'Architecting scalable, resilient, and fault-tolerant cloud-native infrastructure.',
    technologies: ['Cloud Computing', 'Kubernetes', 'Docker', 'gRPC', 'Kafka'],
  },
];
