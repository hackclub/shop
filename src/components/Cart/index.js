import React, { Component } from 'react'
import {
  Heading,
  LargeButton,
  Text,
  Link,
  Flex,
  Box,
  Badge
} from '@hackclub/design-system'

import {
  ProductContainer,
  Thumbnail,
  CartContainer,
  CartNumber,
  QuantitySelector,
  DeleteButton,
  CartItemsHeader,
  CartHeader,
  TotalCost
} from './style'
import IconOnlyButton from '../IconOnlyButton'
import { CloseButton, Modal, Overlay } from '../Modal'
import StoreContext from '../../context/StoreContext'

export default class extends Component {
  state = { active: false }

  toggle = () => {
    this.setState(state => ({ active: !state.active }))
  }

  handleQuantityChange = (updateQuantity, id) => e => {
    e.preventDefault()
    updateQuantity(id, Math.trunc(e.target.value))
  }

  // Render a modal for shopping cart
  render() {
    const { active } = this.state

    return (
      <>
        <CartContainer>
          <IconOnlyButton
            glyph="bag"
            color="slate"
            size={36}
            p={0}
            mt={[-2, null, 0]}
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
          <>
            <Modal align="left" my={4} p={[3, 4]}>
              <CloseButton onClick={this.toggle} />
              <StoreContext.Consumer>
                {({ checkout }) => (
                  <CartHeader>
                    Your Bag <Badge ml={3}>{checkout.lineItems.length}</Badge>
                  </CartHeader>
                )}
              </StoreContext.Consumer>
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

                  if (checkout.lineItems.length > 0) {
                    return (
                      <>
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
                                {item.variant.title !== 'Default Title' &&
                                  `${item.variant.title},`}{' '}
                                $
                                {(item.variant.price * item.quantity).toFixed(
                                  2
                                )}
                              </Text>
                            </Box>
                            <QuantitySelector
                              name="quantity"
                              value={item.quantity}
                              onChange={this.handleQuantityChange(
                                updateQuantity,
                                item.id
                              )}
                              label="Quantity"
                              type="number"
                            />
                            <DeleteButton
                              glyph="delete"
                              onClick={handleRemove(item.id)}
                            />
                          </ProductContainer>
                        ))}
                        <Box mt={3} style={{ float: 'right' }}>
                          <TotalCost>${checkout.totalPrice}</TotalCost>
                          <LargeButton href={checkout.webUrl}>
                            Checkout
                          </LargeButton>
                        </Box>
                      </>
                    )
                  }
                  return (
                    <Flex align="center" justify="center">
                      <Text color="muted" f={4}>
                        Nothing in your bag.
                      </Text>
                    </Flex>
                  )
                }}
              </StoreContext.Consumer>
            </Modal>
            <Overlay onClick={this.toggle} />
          </>
        )}
      </>
    )
  }
}
