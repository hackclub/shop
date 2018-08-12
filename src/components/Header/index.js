import React from 'react'
import { Button } from '@hackclub/design-system'
import { StaticQuery, graphql, Link } from 'gatsby'

import { Container, Logo, ButtonRowContainer } from './style'
import Search from './Search'

export default ({ shadow }) => (
  <Container shadow={shadow}>
      <Logo shadow={shadow} to="/" aria-label="Homepage" />
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
      <Button href="https://github.com/hackclub/shop">GitHub</Button>
    </ButtonRowContainer>
  </Container>
)
