import React, { Component } from 'react'
import Fuse from 'fuse.js'

import { Container, Hits } from './style'
import SearchInput from './SearchInput'
import SearchResult from './SearchResult'

const keys = ['node.title', 'node.description']

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      open: false
    }
    this.fuse = new Fuse(props.products, { threshold: 0.4, keys })
  }

  handleInputChange = e => this.setState({ value: e.target.value })

  clear = () => this.setState({ value: '' })

  render() {
    const results = this.fuse.search(this.state.value)
    const { shadow } = this.props

    return (
      <Container>
        <SearchInput
          placeholder="Search products..."
          label="Search"
          value={this.state.value}
          onChange={this.handleInputChange}
          shadow={shadow}
          onFocus={() => this.setState({ open: true })}
          onBlur={() => setTimeout(() => this.setState({ open: false }), 200)}
        />
        {results.length > 0 &&
          this.state.open && (
            <Hits>
              {results.map(product => (
                <SearchResult product={product.node} clear={this.clear} />
              ))}
            </Hits>
          )}
      </Container>
    )
  }
}
