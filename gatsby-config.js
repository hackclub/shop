// configure plugins here
module.exports = {
  siteMetadata: {
    siteUrl: 'https://shop.hackclub.com',
    title: 'Hack Club Shop',
    description:
      'Get Hack Club stickers and swag, now available on the Hack Club Shop.'
  },
  plugins: [
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'hackclub',
        accessToken: 'ba720b36f1e99b2719bc74ef728ec847'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ]
}
