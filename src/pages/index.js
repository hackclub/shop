import React from 'react'

import Page, { SectionHeading } from '../components/Page'
import data from '../data.json'
import ProductsGrid from '../components/ProductsGrid'

const { name } = data

export default () => (
  <Page>
    <SectionHeading>{name}</SectionHeading>
    <ProductsGrid />
  </Page>
)
