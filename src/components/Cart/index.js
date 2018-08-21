import React, { Component, Fragment } from 'react'
import { Heading, IconButton, Text, Link, Flex } from '@hackclub/design-system'

import {
  ProductContainer,
  Thumbnail,
  RemoveButton,
  CartContainer,
  CartNumber
} from './style'
import { CloseButton, Modal, Overlay } from '../Modal'
import StoreContext from '../../context/StoreContext'

export default class extends Component {
  state = { active: false }

  toggle = () => {
    this.setState(state => ({ active: !state.active }))
  }

  // Render a modal for shopping cart
  render() {
    const { active } = this.state

    return (
      <Fragment>
        <CartContainer>
          <IconButton
            name="shopping_cart"
            bg="smoke"
            color="black"
            onClick={this.toggle}
            style={{ float: 'right' }}
            {...this.props}
          />
          <StoreContext.Consumer>
            {({ checkout }) => (
              <CartNumber children={checkout.lineItems.length} />
            )}
          </StoreContext.Consumer>
        </CartContainer>
        {active && (
          <Fragment>
            <Modal align="left" my={4} p={[3, 4]}>
              <CloseButton onClick={this.toggle} />
              <Heading.h2 color="black">Your Cart</Heading.h2>
              <Text f={2} my={3}>
                The money we charge for swag helps to cover production and
                shipping costs. Hack Club is a new kind of non-profit with{' '}
                <Link href="https://hackclub.com/donate">
                  total transparency
                </Link>
                , including in our financials.
              </Text>
              <StoreContext.Consumer>
                {({ client, checkout, removeLineItem }) => {
                  const handleRemove = id => event => {
                    event.preventDefault()
                    removeLineItem(client, checkout.id, id)
                  }
                  if (checkout.lineItems.length > 0) {
                    return (
                      <Fragment>
                        {checkout.lineItems.map(item => (
                          <ProductContainer>
                            <Thumbnail
                              src={item.variant.image.src}
                              alt={item.variant.title}
                            />
                            <Flex flexDirection="column" ml={3}>
                              <Text color="black">{item.title}</Text>
                              <Text color="muted" f={1}>
                                {item.variant.title}, ${item.variant.price}
                              </Text>
                            </Flex>
                            <RemoveButton
                              name="close"
                              color="black"
                              onClick={handleRemove(item.id)}
                            />
                          </ProductContainer>
                        ))}
                      </Fragment>
                    )
                  }
                  return (
                    <Flex align="center" justify="center">
                      <Text color="muted" f={4}>
                        Nothing in your cart.
                      </Text>
                    </Flex>
                  )
                }}
              </StoreContext.Consumer>
            </Modal>
            <Overlay onClick={this.toggle} />
          </Fragment>
        )}
      </Fragment>
    )
  }
}
