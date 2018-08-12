import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Grid } from './style'
import ProductCard from '../ProductCard'

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
        {products.edges.map(({ node: product }) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    )}
  />
)
