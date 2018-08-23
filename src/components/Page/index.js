import React, { Component } from 'react'
import { Container, ThemeProvider, cx } from '@hackclub/design-system'
import Helmet from 'react-helmet'
import { name, description, img, url } from '../../data.json'
import { throttle } from 'throttle-debounce'

import StoreContext, { defaultStoreContext } from '../../context/StoreContext'
import Header from '../Header'
import Transition from '../Transition'
import Footer from '../Footer'
import ScrollToTop from './ScrollToTop'
import { injectGlobal } from 'styled-components'
export { Gradient, SectionHeading } from './style'

injectGlobal`
  html, body {
    height: 100%;
  }
  body {
    background: ${cx('snow')};
    color: ${cx('black')};
  }
  #___gatsby > div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`

export default class extends Component {
  constructor() {
    super()

    this.state = {
      headerShadow: false,
      scrollToTopVisible: false,
      store: {
        ...defaultStoreContext,
        addVariantToCart: (variantId, quantity) => {
          if (variantId === '' || !quantity) {
            console.error('Both a size and quantity are required.')
            return
          }

          this.setState(state => ({
            store: { ...state.store, isCartOpen: true }
          }))

          const { checkout, client } = this.state.store
          const checkoutId = checkout.id
          const lineItemsToUpdate = [
            { variantId, quantity: parseInt(quantity, 10) }
          ]

          return client.checkout
            .addLineItems(checkoutId, lineItemsToUpdate)
            .then(checkout => {
              this.setState(state => ({ store: { ...state.store, checkout } }))
            })
        },
        removeLineItem: (client, checkoutID, lineItemID) => {
          client.checkout
            .removeLineItems(checkoutID, [lineItemID])
            .then(res => {
              this.setState(state => ({
                store: { ...state.store, checkout: res }
              }))
            })
        },
        updateQuantity: (lineItemId, quantity) => {
          if (quantity > 0) {
            const { checkout, client } = this.state.store
            const checkoutId = checkout.id
            client.checkout
              .updateLineItems(checkoutId, [{ id: lineItemId, quantity }])
              .then(res => {
                this.setState(state => ({
                  store: { ...state.store, checkout: res }
                }))
              })
          }
        },
        toggleCart: () => {
          this.setState(state => ({
            store: { ...state.store, isCartOpen: !state.store.isCartOpen },
            user: { ...state.user, isProfileOpen: false }
          }))
        }
      }
    }
    this.handleScroll = throttle(300, this.handleScroll)
  }

  componentDidMount() {
    window && window.addEventListener('scroll', this.handleScroll)

    // Check for an existing cart.
    const isBrowser = typeof window !== 'undefined'
    const existingCheckoutID = isBrowser
      ? localStorage.getItem('shopify_checkout_id')
      : null

    const setCheckoutInState = checkout => {
      if (isBrowser) {
        localStorage.setItem('shopify_checkout_id', checkout.id)
      }

      this.setState(state => ({
        store: {
          ...state.store,
          checkout
        }
      }))
    }

    const createNewCheckout = () => this.state.store.client.checkout.create()
    const fetchCheckout = id => this.state.store.client.checkout.fetch(id)

    if (existingCheckoutID) {
      fetchCheckout(existingCheckoutID).then(checkout => {
        // Make sure this cart hasn’t already been purchased.
        if (!checkout.completedAt) {
          setCheckoutInState(checkout)
          return
        }

        createNewCheckout().then(setCheckoutInState)
      })
    } else {
      createNewCheckout().then(setCheckoutInState)
    }
  }

  componentWillUnmount() {
    window && window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const headerShadow = window && window.pageYOffset > 0
    const scrollToTopVisible = window && window.pageYOffset > 240
    return this.setState({ headerShadow, scrollToTopVisible })
  }

  scrollToTop = () => {
    return window && window.scrollTo(0, 0)
  }

  render() {
    const { title, children, imageUrl } = this.props
    const { headerShadow, scrollToTopVisible } = this.state

    return (
      <StoreContext.Provider value={this.state.store}>
        <ThemeProvider webfonts>
          <Helmet>
            <title children={title ? `${title} – ${name}` : name} />
            <html lang="en" />
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            <meta name="format-detection" content="telephone=no" />
            <meta name="theme-color" content="#e42d42" />
            <meta
              name="description"
              content={
                title ? `Buy '${title}' at the Hack Club Store` : description
              }
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@hackclub" />
            <meta name="twitter:domain" content={url} />
            <meta
              name="twitter:title"
              content={title ? `${title} – ${name}` : name}
            />
            <meta
              name="twitter:description"
              content={
                title ? `Buy '${title}' at the Hack Club Store` : description
              }
            />
            <meta name="twitter:image" content={imageUrl ? imageUrl : img} />
            <meta property="og:site_name" content={name} />
            <meta
              property="og:title"
              content={title ? `${title} – ${name}` : name}
            />
            <meta
              property="og:description"
              content={
                title ? `Buy '${title}' at the Hack Club Store` : description
              }
            />
            <meta property="og:image" content={imageUrl ? imageUrl : img} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
          </Helmet>
          <Header shadow={headerShadow} />
          <Container
            px={3}
            pt={[6, null, null, 5]}
            w={1}
            style={{ flex: '1 0 auto' }}
          >
            <Transition>{children}</Transition>
            <ScrollToTop
              isVisible={scrollToTopVisible}
              onClick={this.scrollToTop}
            />
          </Container>
          <Footer />
        </ThemeProvider>
      </StoreContext.Provider>
    )
  }
}
