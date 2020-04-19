// https://encycolorpedia.com/
const serviceMeta = {
  github: {
    colors: { body: '#171515' },
    url: 'https://github.com/huangsam/',
  },
  facebook: {
    colors: { body: '#3b5998' },
    url: 'https://www.facebook.com/samuel.c.huang',
  },
  linkedin: {
    colors: { body: '#0072b1' },
    url: 'https://www.linkedin.com/in/sambyte/',
  },
  wordpress: {
    colors: { body: '#21759b' },
    url: 'https://sambyte.wordpress.com/',
  },
};

export const getServiceColor = (service) => serviceMeta[service].colors.body;

export const getServiceUrl = (service) => serviceMeta[service].url;

export const getServices = () => Object.keys(serviceMeta);

export default { getServiceColor, getServiceUrl, getServices };
