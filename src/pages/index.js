import React from 'react'
import { Container, Heading, Text } from '@hackclub/design-system'

import Page from '../components/Page'
import ProductsGrid from '../components/ProductsGrid'

export default () => (
  <Page>
    <Container px={3} maxWidth={35} align={['left', 'center']}>
      <Heading.h1 f={6} color="black">
        Hack Club Shop
      </Heading.h1>
      <Text f={4} my={3} color="slate">
        Get your merch here
      </Text>
    </Container>
    <ProductsGrid px={3} py={[2, 3]} />
  </Page>
)
