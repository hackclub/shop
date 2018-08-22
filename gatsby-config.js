// configure plugins here
module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-shopify-storefront',
      options: {
        siteName: 'hackclub',
        accessToken: 'ba720b36f1e99b2719bc74ef728ec847'
      }
    }
  ]
}
