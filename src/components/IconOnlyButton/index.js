import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from '@hackclub/design-system'

const IconOnlyButton = styled(Button.button).attrs({
  children: props => <Icon {...props} />
})`
  box-shadow: none !important;
  line-height: 0 !important;
  background: none;
  ${Icon} {
    pointer-events: none;
  }
`

export default IconOnlyButton
