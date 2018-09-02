import React, { Component } from 'react'
import IconButton from '../IconButton'
import Clipboard from 'react-clipboard.js'

export class CopyLinkButton extends Component {
  state = {
    isClicked: false
  }

  onClick = () => {
    this.setState({ isClicked: true })
    const ref = setTimeout(() => this.setState({ isClicked: false }), 2000)
    this.ref = ref
  }

  render() {
    const { text, children } = this.props
    const { isClicked } = this.state

    return (
      <Clipboard
        style={{ background: 'none' }}
        data-clipboard-text={text}
        onSuccess={this.onClick}
        component="span"
      >
        <IconButton
          disabled={isClicked}
          bg="slate"
          glyph="link"
          children={isClicked ? 'Copied!' : children}
          f={2}
        />
      </Clipboard>
    )
  }
}
