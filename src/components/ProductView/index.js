import React from 'react'
import { Link } from 'gatsby'
import { Button, Text } from '@hackclub/design-system'

import {
  Grid,
  Sidebar,
  Content,
  Title,
  Description,
  Divider,
  Label
} from './style'
import ProductImage from '../ProductImage'
import DesignersGrid from '../DesignersGrid'
import ProductShareButtons from '../ProductShareButtons'
import AddToCart from '../AddToCart'

export default ({
  product: {
    id,
    title,
    descriptionHtml,
    tags,
    variants,
    fields: { slug, image }
  }
}) => (
  <Grid my={[4, 5]}>
    <Sidebar>
      <Link to={slug}>
        <ProductImage src={image} alt={title} />
      </Link>
      <Divider>
        <Label>Designed By</Label>
      </Divider>
      {tags ? (
        <DesignersGrid designers={tags} />
      ) : (
        <Label>Designers unavailable.</Label>
      )}
    </Sidebar>

    <Content>
      <Title>{title}</Title>
      <Description>{descriptionHtml}</Description>
      <Text f={4} pt={2} color="muted">
        ${variants.edges[0].node.price}
      </Text>

      <ProductShareButtons slug={slug} />
      <AddToCart variants={variants} />
    </Content>
  </Grid>
)
