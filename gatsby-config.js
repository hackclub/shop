// configure plugins here
module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `${__dirname}/plugins/gatsby-source-shopify-storefront`,
      options: {
        siteName: 'hackclub',
        accessToken: 'efe3b65bc5551c1d2392149fa936fe6f'
      }
    },
    {
      resolve: 'gatsby-plugin-segment',
      options: {
        writeKey: '06rvzf07T9l5uxR83GNMUZeuOLGTMIOS'
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://shop.hackclub.com'
      }
    }
  ]
}
