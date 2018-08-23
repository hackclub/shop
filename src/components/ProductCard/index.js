import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Text } from '@hackclub/design-system'
import FadeImage from 'react-fade-image'
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
      <FadeImage width={200} height={200} src={image} alt={title} loaderComponent={<ImageLoader />} />
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
