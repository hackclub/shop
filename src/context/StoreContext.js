import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: 'hackclub.myshopify.com',
  storefrontAccessToken: 'ba720b36f1e99b2719bc74ef728ec847'
})

export const defaultStoreContext = {
  client,
  isCartOpen: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateQuantity: () => {},
  toggleCart: () => {}
}

export default React.createContext(defaultStoreContext)
