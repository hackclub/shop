import React from 'react'
import { Box, Text } from '@hackclub/design-system'
import { Link } from 'gatsby'

import { SearchProductContainer, Image } from './style'

export default ({
  product: {
    title,
    fields: { slug, image },
    variants
  },
  clear
}) => (
  <Link to={slug}>
    <SearchProductContainer onClick={clear}>
      <Image src={image} alt={title} mr={3} />
      <Box align="left">
        <Text color="black" bold>
          {title}
        </Text>
        <Text color="muted" f={1}>
          ${variants.edges[0].node.price}
        </Text>
      </Box>
    </SearchProductContainer>
  </Link>
)
