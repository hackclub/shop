import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: 'hackclub-dev.myshopify.com',
  storefrontAccessToken: '7d56a15c1e33e9a8094baabcf4f13e43'
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
  toggleCart: () => {},
  updateQuantity: () => {}
}

export default React.createContext(defaultStoreContext)
