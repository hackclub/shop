import React from 'react'

import Page, { Gradient, SectionHeading } from '../components/Page'
import ProductsGrid from '../components/ProductsGrid'

export default () => (
  <Page>
    <Gradient>
      <SectionHeading>Hack Club Store</SectionHeading>
      <ProductsGrid />
    </Gradient>
  </Page>
)
