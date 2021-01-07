require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Peter Miller`,
    author: `Nikolas Haug`,
    description: `a simplified artist's portfolio and blog`,
    // siteUrl: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: '',
    //     dataset: 'production',
    //     watchMode: true,
    //     token: process.env.SANITY_TOKEN
    //   }
    // }
  ],
}
