import React from 'react'

import {
  Grid,
  Sidebar,
  Content,
  Title,
  Description,
  Divider,
  Label
} from './style'

export default ({ product: { id, title, descriptionHtml } }) => (
  <Grid>
    <Sidebar>
      <Divider>
        <Label>Designed By</Label>
      </Divider>
    </Sidebar>

    <Content>
      <Title>{title}</Title>
      <Description>{descriptionHtml}</Description>
    </Content>
  </Grid>
)
