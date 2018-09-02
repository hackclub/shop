import React from 'react'

import Page, { SectionHeading, SectionDescription } from '../components/Page'
import { name, description } from '../data.json'
import ProductsGrid from '../components/ProductsGrid'

export default () => (
  <Page>
    <SectionHeading children={name} />
    <SectionDescription children={description} />
    <ProductsGrid />
  </Page>
)
