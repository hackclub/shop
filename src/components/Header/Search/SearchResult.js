import React from 'react'
import { Link } from 'gatsby'

import { SearchProductContainer } from './style'

export default ({
  product: {
    title,
    fields: { slug }
  },
  clear
}) => (
  <Link to={slug}>
    <SearchProductContainer onClick={clear}>{title}</SearchProductContainer>
  </Link>
)
