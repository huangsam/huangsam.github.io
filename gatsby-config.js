module.exports = {
  siteMetadata: {
    title: `Sam's corner of the web`,
    author: `Sam Huang`,
    description: `A couple pages about Sam Huang`,
    siteUrl: `https://sambyte.net/`,
    social: [
      {
        name: `github`,
        url: `https://github.com/huangsam`,
      },
      {
        name: `facebook`,
        url: `https://facebook.com/samuel.c.huang`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/sambyte/`,
      },
      {
        name: `wordpress`,
        url: `https://sambyte.wordpress.com/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
