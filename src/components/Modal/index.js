import React, { Fragment } from 'react'
import ScrollLock from 'react-scrolllock'
import { IconOnlyButton, BoxIcon } from './style'

import { Modal, Overlayer } from './style'

const Overlay = props => (
  <Fragment>
    <Overlayer {...props} />
    <ScrollLock />
  </Fragment>
)

const CloseButton = props => (
  <IconOnlyButton
    children={<BoxIcon glyph="view-close" color="muted" />}
    {...props}
  />
)

export { Modal, Overlay, Overlayer, CloseButton }
