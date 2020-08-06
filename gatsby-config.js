const siteMetadata = require('./config/site-metadata');
const path = require('path');

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
        path: path.join(__dirname, 'static/posts'),
        name: 'posts',
      },
    },
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-layout`,
  ],
};
