import React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import ProductView from '../components/ProductView'

export default ({ data: { shopifyProducts } }) => (
  <Page title={shopifyProducts.title}>
    <ProductView product={shopifyProducts} />
  </Page>
)

export const query = graphql`
  query($slug: String!) {
    shopifyProducts(fields: { slug: { eq: $slug } }) {
      id
      title
      descriptionHtml
      variants {
        edges {
          node {
            price
            title
            id
          }
        }
      }
      fields {
        image
        slug
      }
    }
  }
`
