// https://encycolorpedia.com/
const serviceMeta = {
  github: {
    colors: { bodyBgColor: '#171515' },
    url: 'https://github.com/huangsam/',
  },
  facebook: {
    colors: { bodyBgColor: '#3b5998' },
    url: 'https://www.facebook.com/samuel.c.huang',
  },
  linkedin: {
    colors: { bodyBgColor: '#0072b1' },
    url: 'https://www.linkedin.com/in/sambyte/',
  },
  wordpress: {
    colors: { bodyBgColor: '#21759b' },
    url: 'https://sambyte.wordpress.com/',
  },
};

export const getServiceColors = (service) => serviceMeta[service].colors;

export const getServiceUrl = (service) => serviceMeta[service].url;

export const getServices = () => Object.keys(serviceMeta);

export default { getServiceColors, getServiceUrl, getServices };
