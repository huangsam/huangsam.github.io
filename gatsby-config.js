module.exports = {
  siteMetadata: {
    title: `Sam's personal site`,
    author: `Sam Huang`,
    twitter: `@s_c_huang`,
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
      {
        name: `twitter`,
        url: `https://twitter.com/s_c_huang`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sam's personal site`,
        short_name: `Sam's site`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
