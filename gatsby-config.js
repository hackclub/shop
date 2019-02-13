// configure plugins here
module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'hackclub',
        accessToken: 'ba720b36f1e99b2719bc74ef728ec847'
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
