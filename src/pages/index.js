import React from 'react'
import { Box, Heading, Text } from '@hackclub/design-system'

import Page from '../components/Page'
import ProductsGrid from '../components/ProductsGrid'

export default () => (
  <Page>
    <Box align={['left', 'center']} mb={5}>
      <Heading.h1 color="black">Hack Club Shop</Heading.h1>
      <Text f={3} color="slate">Get awesome swag here</Text>
    </Box>
    <ProductsGrid />
  </Page>
)
