import React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'

export default ({ data: { shopifyProducts } }) => <Page>hello world</Page>

export const query = graphql`
  query($slug: String!) {
    shopifyProducts(fields: { slug: { eq: $slug } }) {
      title
      fields {
        image
        slug
      }
    }
  }
`
