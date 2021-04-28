const path = require('path')

const srcDirectory = path.resolve(__dirname, 'src')

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.resolve(srcDirectory, 'posts'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'talks',
        path: path.resolve(srcDirectory, 'talks'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
      },
    },
  ],
};
