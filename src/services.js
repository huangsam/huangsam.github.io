import { Theme } from './theme';

// https://encycolorpedia.com/
const serviceMeta = {
  github: {
    theme: Theme.CustomTheme('#171515'),
    url: 'https://github.com/huangsam/',
  },
  facebook: {
    theme: Theme.CustomTheme('#3b5998'),
    url: 'https://www.facebook.com/samuel.c.huang',
  },
  linkedin: {
    theme: Theme.CustomTheme('#0072b1'),
    url: 'https://www.linkedin.com/in/sambyte/',
  },
  wordpress: {
    theme: Theme.CustomTheme('#21759b'),
    url: 'https://sambyte.wordpress.com/',
  },
};

// Helper methods
const getServices = () => Object.keys(serviceMeta);
const getServiceTheme = (service) => serviceMeta[service].theme;
const getServiceUrl = (service) => serviceMeta[service].url;
const getOriginalTheme = () => Theme.OriginalTheme();

export default {
  getServices,
  getServiceTheme,
  getServiceUrl,
  getOriginalTheme,
};
