import React, { Component } from 'react'
import { Button, Icon, Text } from '@hackclub/design-system'
import styled from 'styled-components'
import Clipboard from 'react-clipboard.js'

const IconButton = ({ is = Button, name, size = 24, children, ...props }) => {
  const Component = styled(is)`
    display: inline-flex;
    align-items: center;
  `
  return (
    <Component {...props}>
      <Icon color="inherit" name={name} size={size} />
      {children && <Text.span ml={1} children={children} />}
    </Component>
  )
}

export class CopyLinkButton extends Component {
  state = {
    isClicked: false
  }

  onClick = () => {
    this.setState({ isClicked: true })

    const ref = setTimeout(() => {
      return this.setState({ isClicked: false })
    }, 2000)
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
        component="a"
      >
        <IconButton
          disabled={isClicked}
          bg="slate"
          name="content_copy"
          children={isClicked ? 'Copied!' : children}
        />
      </Clipboard>
    )
  }
}
