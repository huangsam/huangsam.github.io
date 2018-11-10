const serviceMeta = {
  "github": {
    "color": "#24292e",
    "url": "https://github.com/huangsam/"
  },
  "facebook": {
    "color": "#3b5998",
    "url": "https://www.facebook.com/samuel.c.huang"
  },
  "linkedin": {
    "color": "#0077b5",
    "url": "https://www.linkedin.com/in/sambyte/"
  },
  "wordpress": {
    "color": "#21759b",
    "url": "https://sambyte.wordpress.com/"
  }
};

/** Helper routines */

let getServiceUrl = (service) => {
  return serviceMeta[service]["url"];
};

let getServiceColor = (service) => {
  return serviceMeta[service]["color"];
};

module.exports = {
  getServiceUrl,
  getServiceColor
};
