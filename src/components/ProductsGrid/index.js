import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { orderBy } from 'lodash'

import { Grid } from './style'
import ProductCard from '../ProductCard'
import EmailSignup from '../EmailSignup'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        products: allShopifyProducts {
          edges {
            node {
              id
              title
              description
              availableForSale
              variants {
                edges {
                  node {
                    price
                  }
                }
              }
              fields {
                image
                slug
              }
            }
          }
        }
      }
    `}
    render={({ products }) => (
      <Grid>
        {orderBy(products.edges, [p => p.node.availableForSale], ['desc']).map(
          ({ node: product }) => (
            <ProductCard key={product.id} product={product} />
          )
        )}
        <EmailSignup />
      </Grid>
    )}
  />
)
