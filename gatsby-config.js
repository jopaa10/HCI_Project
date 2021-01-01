// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

// And then you can use the config in gatsby-config.js
const config = require('gatsby-plugin-config');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `josefin sans`,
        ],
        display: 'swap',}
    },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/newsItems/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDsi-1Htc4ewdgbGG8YTojOuLAksGdPb10",
          authDomain: "photogallery-c272e.firebaseapp.com",
          databaseURL: "https://photogallery-c272e.firebaseio.com",
          projectId: "photogallery-c272e",
          storageBucket: "photogallery-c272e.appspot.com",
          messagingSenderId: "1012383819368",
          appId: "1:1012383819368:web:64514f1b2da7dc1d923ddd",
          measurementId: "G-DZJSC865KQ"
        }
      }
    },
    `gatsby-plugin-react-helmet`,
  ],
}
