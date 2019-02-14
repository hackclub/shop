import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

export default props => {
  const {
    site,
    shopifyProduct: product,
    shopifyProduct: { title, handle }
  } = props.data

  const description = `Buy ${title} at the Hack Club Shop`
  const image = product.images[0].localFile.childImageSharp.fluid.src

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta
          property="og:url"
          content={`${site.siteMetadata.siteUrl}/product/${handle}`}
        />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Gatsby Swag Store" />
        <meta property="og:description" content={description} />

        {/* TODO: add the image */}
        <meta
          property="og:image"
          content={`${site.siteMetadata.siteUrl}${image}`}
        />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@gatsbyjs" />
      </Helmet>
      <p>{title}</p>
    </Layout>
  )
}

export const query = graphql`
  query($handle: String!) {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
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
`
