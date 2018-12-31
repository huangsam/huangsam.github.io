const serviceMeta = {
  github: {
    bgcolor: '#24292e',
    url: 'https://github.com/huangsam/',
  },
  facebook: {
    bgcolor: '#3b5998',
    url: 'https://www.facebook.com/samuel.c.huang',
  },
  linkedin: {
    bgcolor: '#0077b5',
    url: 'https://www.linkedin.com/in/sambyte/',
  },
  wordpress: {
    bgcolor: '#21759b',
    url: 'https://sambyte.wordpress.com/',
  },
};

const getServiceColor = service => serviceMeta[service].bgcolor;

const getServiceUrl = service => serviceMeta[service].url;

module.exports = {
  getServiceUrl,
  getServiceColor,
};
