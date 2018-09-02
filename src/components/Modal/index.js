import React, { Fragment } from 'react'
import ScrollLock from 'react-scrolllock'
import IconOnlyButton from '../IconOnlyButton'

import { Modal, Overlayer } from './style'

const Overlay = props => (
  <Fragment>
    <Overlayer {...props} />
    <ScrollLock />
  </Fragment>
)

const CloseButton = props => (
  <IconOnlyButton glyph="view-close" color="muted" {...props} />
)

export { Modal, Overlay, Overlayer, CloseButton }
