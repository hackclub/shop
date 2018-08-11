import React from 'react'
import { Link } from 'gatsby'

import ProductImage from '../ProductImage'

export default ({
  product: {
    fields: { slug, image },
    title
  }
}) => (
  <Link to={slug}>
    <ProductImage src={image} alt={title} />
  </Link>
)
