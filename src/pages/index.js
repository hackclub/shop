import React from 'react'

import Page, { SectionHeading, Heading, Subheading } from '../components/Page'
import ProductsGrid from '../components/ProductsGrid'

export default () => (
  <Page>
    <SectionHeading>
      <Heading>Store</Heading>
      <Subheading>buy cool things here</Subheading>
    </SectionHeading>
    <ProductsGrid />
  </Page>
)
