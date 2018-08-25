// implement node api stuff here

const path = require('path')

// react-image-lightbox expects window to be defined,
// so we need to load in null during build,
// which can’t reference globals like window, since it
// isn’t running in the browser
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-image-lightbox/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'ShopifyProducts') {
    // shortcut to getting the featured image
    const image = node.images.edges[0].node.src
    createNodeField({
      node,
      name: 'image',
      value: image
    })

    // slugify the title
    const slug = toKebabCase(node.title)
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allShopifyProducts {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allShopifyProducts.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/product.js'),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        })
      })
      resolve()
    })
  })
}
