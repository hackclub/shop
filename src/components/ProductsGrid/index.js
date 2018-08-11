import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Container, Grid } from './style'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        products: allShopifyProducts {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `}
    render={({ products }) => (
      <Container>
        <Grid>
          {products.edges.map(({ node: product }) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </Grid>
      </Container>
    )}
  />
)
