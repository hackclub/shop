const crypto = require('crypto')
const productQuery = require('./product-query')

exports.sourceNodes = async ({ actions }, { siteName, accessToken }) => {
  const { createNode } = actions
  const client = require('graphql-client')({
    url: `https://${siteName}.myshopify.com/api/graphql`,
    headers: {
      'X-Shopify-Storefront-Access-Token': accessToken
    }
  })

  const response = await client.query(productQuery)

  if (
    response &&
    response.data &&
    response.data.shop &&
    response.data.shop.products &&
    response.data.shop.products.edges
  ) {
    response.data.shop.products.edges.forEach(({ node }) => {
      node.parent = null
      node.children = []
      node.internal = {
        mediaType: 'application/json',
        type: 'ShopifyProducts',
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(node))
          .digest('hex'),
        content: JSON.stringify(node)
      }

      createNode(node)
    })
  }

  return
}
