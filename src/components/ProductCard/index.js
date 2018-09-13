import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Text } from '@hackclub/design-system'
import FadeIn from 'react-lazyload-fadein'

import { Item, ImageWrapper, ImageSpacer, StyledImage } from './style'

export default ({
  product: {
    fields: { slug, image },
    title,
    description,
    availableForSale,
    variants
  }
}) => {
  const productInfo = JSON.parse(description)
  return (
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
            color={
              productInfo.exists
                ? availableForSale
                  ? 'black'
                  : 'muted'
                : 'black'
            }
          >
            {title}
          </Heading.h3>
          <Text
            f={2}
            mb={2}
            color={
              productInfo.exists
                ? availableForSale
                  ? 'black'
                  : 'muted'
                : 'black'
            }
          >
            {productInfo.description}
          </Text>
          <Text f={2} color="muted">
            {productInfo.exists
              ? availableForSale
                ? `$${variants.edges[0].node.price}`
                : 'Out of Stock'
              : `$${variants.edges[0].node.price}`}
          </Text>
        </Box>
      </Item>
    </Link>
  )
}
