import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Image, Text } from '@hackclub/design-system'
import FadeIn from 'react-lazyload-fadein'
import ImageLoader from '../ImageLoader'

import { Item } from './style'

export default ({
  product: {
    id,
    fields: { slug, image },
    title,
    description,
    variants
  }
}) => (
  <Link to={slug}>
    <Item>
      <FadeIn>
        {onload => (
          <Image src={image} alt={title} onLoad={onload} height={200} />
        )}
      </FadeIn>
      <Box p={3}>
        <Heading.h3 f={[3, 4]} mb={1}>
          {title}
        </Heading.h3>
        <Text f={2} mb={2}>
          {description}
        </Text>
        <Text f={2} color="muted">
          ${variants.edges[0].node.price}
        </Text>
      </Box>
    </Item>
  </Link>
)
