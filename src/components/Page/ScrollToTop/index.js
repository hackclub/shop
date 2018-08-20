import React from 'react'
import Icon from 'spectrum-icons'
import ScrollToTop from './style'

export default props => (
  <ScrollToTop aria-role="button" {...props}>
    <Icon glyph="view-back" size={32} />
  </ScrollToTop>
)
