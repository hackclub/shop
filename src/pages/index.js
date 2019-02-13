import React from 'react'
import { StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Container, Flex, Heading } from '@hackclub/design-system'
import Img from 'gatsby-image'

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;

  div:nth-child(1) {
    grid-column: auto/span 2;
  }

  div {
    border-radius: 0.5rem;
  }
`

const Card = styled.div`
  position: relative;
`

const Image = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 440px;

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'; // needed for IE9+ polyfill
  }
`

const Content = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
`

export default () => (
  <div>
    <StaticQuery
      query={graphql`
        query ProductListingQuery {
          products: allShopifyProduct(
            sort: { fields: [publishedAt], order: ASC }
          ) {
            edges {
              node {
                id
                handle
                title
                description
                productType
                variants {
                  shopifyId
                  title
                  price
                  availableForSale
                }
                images {
                  id
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 910, maxHeight: 910) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={({ products }) => (
        <Grid>
          {products.edges.map(product => (
            <Card>
              <Image
                fluid={product.node.images[0].localFile.childImageSharp.fluid}
              />
              <Content p={3}>
                <Heading.h3 fontSize={6} color="white">
                  {product.node.title}
                </Heading.h3>
              </Content>
            </Card>
          ))}
        </Grid>
      )}
    />
  </div>
)
