module.exports = {
  siteMetadata: {
    title: `수염난친구들`,
    description: `hello`,
    author: `hun95`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-head`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `custom-class`,
              maintainCase: false,
              removeAccents: true,
              elements: [`h1`, `h2`, `h3`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom:2rem;',
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
