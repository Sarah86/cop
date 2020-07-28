require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Congresso Internacional de Operações Policiais`,
    description: `O maior evento para atividade policial da América Latina`,
    author: `Alvaro Marques e Sarah Gonçalves`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              linkImagesToOriginal: false,
              backgroundColor: 'none',
              withWebp: true,
              tracedSVG: true,
              wrapperStyle: fluidResult => fluidResult.originalName.includes('logo') && `max-width: 150px; margin-left: 0 !important;`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-152803216-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '489693661974423',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Congresso Internacional de Operações Policiais`,
        short_name: `COP`,
        start_url: `/`,
        background_color: `#061019`,
        theme_color: `#061019`,
        display: `minimal-ui`,
        icon: `src/images/logo_cop_isotipo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
