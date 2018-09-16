import React from 'react'

import Page, { SectionHeading } from '../components/Page'
import { name } from '../data.json'
import ProductsGrid from '../components/ProductsGrid'

export default () => (
  <Page>
    <SectionHeading children={name} />
    <ProductsGrid />
  </Page>
)
