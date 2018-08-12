import React, { Component, Fragment } from 'react'
import { Heading, IconButton } from '@hackclub/design-system'

import { CloseButton, Modal, Overlay } from '../Modal'

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
            </Modal>
            <Overlay onClick={this.toggle} />
          </Fragment>
        )}
      </Fragment>
    )
  }
}
