module.exports = {
  siteMetadata: {
    title: 'Vertike',
    siteUrl: 'http://www.vertike.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
  ],
}
