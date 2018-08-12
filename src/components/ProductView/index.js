import React from 'react'
import { Link } from 'gatsby'

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

export default ({
  product: {
    id,
    title,
    descriptionHtml,
    fields: { slug, image }
  }
}) => (
  <Grid px={3}>
    <Sidebar>
      <Link to={slug}>
        <ProductImage src={image} alt={title} />
      </Link>
      <Divider>
        <Label>Designed By</Label>
      </Divider>
      <DesignersGrid designers={['h', 'adsa', 'adad']} />
    </Sidebar>

    <Content>
      <Title>{title}</Title>
      <Description>{descriptionHtml}</Description>
    </Content>
  </Grid>
)
