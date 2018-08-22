import React, { Component, Fragment } from 'react'
import {
  Heading,
  IconButton,
  LargeButton,
  Text,
  Link,
  Flex,
  Box
} from '@hackclub/design-system'

import {
  ProductContainer,
  Thumbnail,
  CartContainer,
  CartNumber,
  QuantitySelector,
  DeleteButton,
  CartItemsHeader
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
                {({ client, checkout, removeLineItem, updateQuantity }) => {
                  const handleRemove = id => event => {
                    event.preventDefault()
                    removeLineItem(client, checkout.id, id)
                  }

                  const handleQuantityChange = id => e => {
                    e.preventDefault()
                    updateQuantity(client, checkout.id, id, Math.trunc(e.target.value))
                  }

                  if (checkout.lineItems.length > 0) {
                    return (
                      <Fragment>
                        <CartItemsHeader>
                          <Heading.h3 f={4}>Items</Heading.h3>
                          <Text color="muted" f={1} mr={2}>
                            Quantity
                          </Text>
                          <Text color="muted" f={1}>
                            Remove
                          </Text>
                        </CartItemsHeader>
                        {checkout.lineItems.map(item => (
                          <ProductContainer>
                            <Thumbnail
                              src={item.variant.image.src}
                              alt={item.variant.title}
                            />
                            <Box ml={3} mr="auto">
                              <Text color="black" bold>
                                {item.title}
                              </Text>
                              <Text color="muted" f={1}>
                                {item.variant.title}, ${item.variant.price}
                              </Text>
                            </Box>
                            <QuantitySelector
                              name="quantity"
                              value={item.quantity}
                              onChange={handleQuantityChange(item.id)}
                              label="Quantity"
                              type="number"
                            />
                            <DeleteButton
                              glyph="delete"
                              onClick={handleRemove(item.id)}
                            />
                          </ProductContainer>
                        ))}
                        <LargeButton
                          mt={3}
                          style={{ float: 'right' }}
                          href={checkout.webUrl}
                        >
                          Checkout
                        </LargeButton>
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
