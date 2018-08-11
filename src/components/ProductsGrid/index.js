import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Grid } from './style'
import ProductCard from '../ProductCard'

export default ({...props}) => (
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
      <Grid {...props}>
        {products.edges.map(({ node: product }) => (
          <Fragment>
            <ProductCard key={product.id} product={product} />
            <ProductCard key={product.id} product={product} />
            <ProductCard key={product.id} product={product} />
            <ProductCard key={product.id} product={product} />
            <ProductCard key={product.id} product={product} />
          </Fragment>
        ))}
      </Grid>
    )}
  />
)
