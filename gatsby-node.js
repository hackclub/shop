const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `)

  pages.data.allShopifyProduct.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.handle}`,
      component: path.resolve('./src/templates/product.js'),
      context: {
        id: edge.node.id,
        handle: edge.node.handle
      }
    })
  })
}
