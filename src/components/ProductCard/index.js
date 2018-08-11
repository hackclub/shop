import React from 'react'
import { Heading } from '@hackclub/design-system'

import { Base, ProductCard } from './style'

export default ({
  product: {
    id,
    fields: { slug, image },
    title
  }
}) => (
  <Base
    id={id}
    element="a"
    href={slug}
    target="_blank"
    itemScope
    itemType="http://schema.org/Product"
  >
    <ProductCard bg={image}>
      <Heading.h3
        color="white"
        regular
        align="center"
        my={2}
        style={{ flex: '1 0 auto' }}
        itemProp="name"
      >
        {title}
      </Heading.h3>
    </ProductCard>
  </Base>
)
