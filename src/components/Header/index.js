import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Container, Logo, ButtonRowContainer } from './style'
import Search from './Search'
import Cart from '../Cart'

export default ({ shadow }) => (
  <Container shadow={shadow}>
    <Logo
      shadow={shadow}
      href="https://hackclub.com"
      target="_blank"
      aria-label="Hack Club Homepage"
    />
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
        <Search shadow={shadow} products={products.edges} />
      )}
    />
    <ButtonRowContainer>
      <Cart />
    </ButtonRowContainer>
  </Container>
)
