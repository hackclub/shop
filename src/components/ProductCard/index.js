import React from 'react'
import { Link } from 'gatsby'

import ProductImage from '../ProductImage'

export default ({ slug, img, name }) => (
  <Link to={slug}>
    <ProductImage src={img} alt={name} />
  </Link>
)
