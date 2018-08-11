// implement node api stuff here

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'ShopifyProducts') {
    const image = node.images.edges[0].node.src
    createNodeField({
      node,
      name: 'image',
      value: image
    })
  }
}
