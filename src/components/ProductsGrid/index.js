import React from 'react'
import { Container, Flex } from '@hackclub/design-system'
import { StaticQuery, graphql } from 'gatsby'

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
      <Container px={3} pb={4}>
        <Flex mx={[1, 2, -3]} wrap justify="center">
          {products.edges.map(({ node: product }) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Flex>
      </Container>
    )}
  />
)
