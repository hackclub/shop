import React from 'react'
import { Link } from 'gatsby'

import {
  Grid,
  Sidebar,
  Content,
  Title,
  Description,
  Price,
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
      <ProductShareButtons slug={slug} />
      {tags && (
        <>
          <Divider>
            <Label>Designed By</Label>
          </Divider>
          {tags && <DesignersGrid designers={tags} />}
        </>
      )}
    </Sidebar>

    <Content>
      <Title>{title}</Title>
      <Description>{descriptionHtml}</Description>
      <Price>{variants.edges[0].node.price}</Price>
      <AddToCart variants={variants} />
    </Content>
  </Grid>
)
