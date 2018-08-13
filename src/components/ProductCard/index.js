import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Text, Loading } from '@hackclub/design-system'
import Img from 'react-image'

import { Item, LoadingBase } from './style'

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
      <Img
        src={image}
        alt={title}
        loader={
          <LoadingBase>
            <Loading />
          </LoadingBase>
        }
      />
      <Box px={3}>
        <Heading.h3 f={3} py={3} color="black">
          {title}
        </Heading.h3>
        <Text f={2} color="black">
          {description}
        </Text>
        <Text f={2} pb={3} color="muted">
          ${variants.edges[0].node.price}
        </Text>
      </Box>
    </Item>
  </Link>
)
