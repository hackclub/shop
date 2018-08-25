import React from 'react'

import Page, { SectionHeading, SectionDescription } from '../components/Page'
import { name, description } from '../data.json'
import ProductsGrid from '../components/ProductsGrid'

export default () => (
  <Page>
    <SectionHeading>
      {name}
      <SectionDescription children={description} />
    </SectionHeading>
    <ProductsGrid />
  </Page>
)
