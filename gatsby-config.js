require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Congresso Internacional de Operações Policiais`,
    description: `O maior evento para atividade policial da América Latina`,
    author: `Alvaro Marques e Sarah Gonçalves`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-152803216-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '489693661974423',
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //{
    //resolve: `gatsby-source-filesystem`,
    //options: {
    //name: `markdown-pages`,
    //path: `${__dirname}/src/data`,
    //},
    //},
    //`gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
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
