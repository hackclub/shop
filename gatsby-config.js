// configure plugins here
module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `${__dirname}/plugins/gatsby-source-shopify-storefront`,
      options: {
        siteName: 'hackclub',
        accessToken: 'ba720b36f1e99b2719bc74ef728ec847'
      }
    }
  ]
}
