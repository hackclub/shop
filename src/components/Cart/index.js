import React, { Component, Fragment } from 'react'
import { Heading, IconButton, Text, Link, Flex } from '@hackclub/design-system'

import { ProductContainer, Thumbnail } from './style'
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
        <IconButton
          name="shopping_cart"
          bg="smoke"
          color="black"
          onClick={this.toggle}
          style={{ float: 'right' }}
          {...this.props}
        />
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
                  console.log(checkout.lineItems)
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
                              {item.variant.title}, {item.variant.price}
                            </Text>
                          </Flex>
                        </ProductContainer>
                      ))}
                    </Fragment>
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
