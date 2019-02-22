import React from 'react'
import styled from 'styled-components'
import { Container, theme, mediaQueries } from '@hackclub/design-system'
import { useStaticQuery, graphql } from 'gatsby'

import ProductCard from '../components/ProductCard'

const Grid = styled(Container)`
  display: grid;
  grid-gap: ${theme.space[4]}px;
  grid-template-columns: 1fr;

  ${mediaQueries.md} {
    grid-gap: ${theme.space[5]}px;
    grid-template-columns: repeat(2, 1fr);

    a:nth-child(1) {
      grid-column: span 2;
    }
  }

  ${mediaQueries.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query ProductListingQuery {
      products: allShopifyProduct(sort: { fields: [publishedAt], order: ASC }) {
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
  `)

  const { products } = data

  return (
    <Grid px={4} pt={7}>
      {products.edges.map(({ node: product }) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  )
}
