import React, { Component } from 'react'
import { Button, Field } from '@hackclub/design-system'
import StoreContext from '../../context/StoreContext'

export default class AddToCart extends Component {
  state = {
    variant: '',
    quantity: 1
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = callback => event => {
    console.log(this.state)
    event.preventDefault()
    if (this.state.variant === '') {
      // TODO design a better way to show errors.
      alert('Please select a size first.')
      return
    }

    if (this.state.quantity < 1) {
      alert('Please choose a quantity of 1 or more.')
      return
    }

    callback(this.state.variant, this.state.quantity)
  }

  render() {
    const { variants } = this.props

    return (
      <StoreContext.Consumer>
        {({ addVariantToCart }) => (
          <form onSubmit={this.handleSubmit(addVariantToCart)}>
            <Field
              name="variant"
              value={this.state.variant}
              label="Choose a size:"
              onChange={this.handleChange}
              type="select"
            >
              <option disabled value="">
                Choose Size
              </option>
              {variants.edges.map(variant => (
                <option value={variant.node.id} key={variant.node.id}>
                  {variant.node.title}
                </option>
              ))}
            </Field>
            <Field
              name="quantity"
              value={this.state.quantity}
              label="Choose a quantity:"
              onChange={this.handleChange}
              type="number"
            />
            <Button onClick={this.handleSubmit(addVariantToCart)} type="submit">
              Add to Cart
            </Button>
          </form>
        )}
      </StoreContext.Consumer>
    )
  }
}
