import React from 'react'
import { Flex, Text } from '@hackclub/design-system'
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
      <Image src={image} alt={title} />
      <Flex flexDirection="column" ml={3}>
        <Text color="black">{title}</Text>
        <Text color="muted" f={1}>${variants.edges[0].node.price}</Text>
      </Flex>
    </SearchProductContainer>
  </Link>
)
