import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Text } from '@hackclub/design-system'
import FadeIn from 'react-lazyload-fadein'

import { Item, ImageWrapper, ImageSpacer, StyledImage } from './style'

export default ({
  product: {
    id,
    fields: { slug, image },
    title,
    description,
    availableForSale,
    variants
  }
}) => (
  <Link to={slug}>
    <Item>
      <ImageWrapper>
        <ImageSpacer />
        <FadeIn>
          {onload => <StyledImage src={image} alt={title} onLoad={onload} />}
        </FadeIn>
      </ImageWrapper>
      <Box p={3}>
        <Heading.h3
          f={[3, 4]}
          mb={1}
          color={availableForSale ? 'black' : 'muted'}
        >
          {title}
        </Heading.h3>
        <Text f={2} mb={2} color={availableForSale ? 'black' : 'muted'}>
          {
            JSON.parse(description)
              .description /* parse description from JSON */
          }
        </Text>
        <Text f={2} color="muted">
          {availableForSale
            ? `$${variants.edges[0].node.price}`
            : 'Out of Stock'}
        </Text>
      </Box>
    </Item>
  </Link>
)
