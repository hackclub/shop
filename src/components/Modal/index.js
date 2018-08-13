import React, { Fragment } from 'react'
import { IconButton } from '@hackclub/design-system'
import ScrollLock from 'react-scrolllock'

import { Modal, Overlayer } from './style'

const Overlay = props => (
  <Fragment>
    <Overlayer {...props} />
    <ScrollLock />
  </Fragment>
)

const CloseButton = props => (
  <IconButton name="close" color="muted" circle p={3} {...props} />
)

export { Modal, Overlay, Overlayer, CloseButton }
