import React from 'react'
import styled from 'styled-components'
import { Button, Box } from '@hackclub/design-system'
import Icon from '@hackclub/icons'

const BoxIcon = styled(Box.withComponent(Icon))`
  pointer-events: none;
`

const IconOnlyButton = styled(Button.button).attrs({
  children: props => <BoxIcon {...props} />
})`
  box-shadow: none !important;
  line-height: 0 !important;
  background: none;
`

export default IconOnlyButton
