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
import ProductShareButtons from '../ProductShareButtons'

export default ({
  product: {
    id,
    title,
    descriptionHtml,
    tags,
    fields: { slug, image }
  }
}) => (
  <Grid>
    <Sidebar>
      <Link to={slug}>
        <ProductImage src={image} alt={title} />
      </Link>
      <Divider>
        <Label>Designed By</Label>
      </Divider>
      <DesignersGrid
        designers={tags ? tags : ['merelinguist', 'zanedb_', 'hackclub']}
      />
    </Sidebar>

    <Content>
      <Title>{title}</Title>
      <Description>{descriptionHtml}</Description>

      <ProductShareButtons slug={slug} />
    </Content>
  </Grid>
)
