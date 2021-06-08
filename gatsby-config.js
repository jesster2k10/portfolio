const path = require('path');
const siteMetadata = require('./config/site-metadata');

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'static/projects'),
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'static/education'),
        name: 'education',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['JetBrains Mono'],
        display: 'swap',
      },
    },
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
  ],
};
