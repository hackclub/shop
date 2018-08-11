import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Container, Grid } from './style'
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
      <Container>
        <Grid>
          {products.edges.map(({ node: product }) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    )}
  />
)
