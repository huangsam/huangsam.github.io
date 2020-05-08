const serviceUrls = {
  github: 'https://github.com/huangsam/',
  facebook: 'https://www.facebook.com/samuel.c.huang',
  linkedin: 'https://www.linkedin.com/in/sambyte/',
  wordpress: 'https://sambyte.wordpress.com/',
};

// Helper methods
const getServices = () => Object.keys(serviceUrls);
const getServiceUrl = (service) => serviceUrls[service];

export default {
  getServices,
  getServiceUrl,
};
