import React, { Component } from 'react'
import { LargeButton, Field } from '@hackclub/design-system'
import StoreContext from '../../context/StoreContext'
import IconButton from '../IconButton'

export default class extends Component {
  state = {
    // TODO: this isn’t great 🍝
    variant:
      this.props.variants.edges.length === 1
        ? this.props.variants.edges[0].node.id
        : '',
    quantity: 1,
    errors: {
      variant: '',
      quantity: ''
    },
    added: false
  }

  handleChange = e => {
    // update Field values and check for errors
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.forceUpdate()
      this.handleErrors()
    })
  }

  handleErrors = () => {
    const errors = {}
    if (this.state.variant === '')
      errors.variant = 'Please select a size first.'
    if (this.state.quantity < 1)
      errors.quantity = 'Please choose a quantity of 1 or more.'

    this.setState({
      errors
    })

    return errors === {}
  }

  handleSubmit = callback => e => {
    e.preventDefault()

    if (this.handleErrors() !== {}) {
      callback(this.state.variant, this.state.quantity)
      this.setState({
        added: true
      })
    }
  }

  render() {
    const { variants, availableForSale } = this.props
    const { added } = this.state
    return (
      <StoreContext.Consumer>
        {({ addVariantToCart }) => (
          <form onSubmit={this.handleSubmit(addVariantToCart)}>
            <Field
              name="variant"
              value={this.state.variant}
              label="Choose a size"
              onChange={this.handleChange}
              type="select"
              error={this.state.errors.variant}
            >
              {variants.edges.map(variant => (
                <option value={variant.node.id} key={variant.node.id}>
                  {variant.node.title}
                </option>
              ))}
            </Field>
            <Field
              name="quantity"
              value={this.state.quantity}
              label="Choose a quantity"
              onChange={this.handleChange}
              type="number"
              error={this.state.errors.quantity}
            />
            <IconButton
              onClick={availableForSale && this.handleSubmit(addVariantToCart)}
              type="submit"
              mt={3}
              size={32}
              bg={availableForSale ? (added ? 'success' : 'primary') : 'muted'}
              glyph="bag-add"
              is={LargeButton}
            >
              {availableForSale
                ? added
                  ? 'Added'
                  : 'Add to Bag'
                : 'Out of Stock'}
            </IconButton>
          </form>
        )}
      </StoreContext.Consumer>
    )
  }
}
