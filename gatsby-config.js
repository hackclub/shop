// configure plugins here
module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-shopify-storefront',
      options: {
        siteName: 'hackclub-dev',
        accessToken: '7d56a15c1e33e9a8094baabcf4f13e43'
      }
    }
  ]
}
