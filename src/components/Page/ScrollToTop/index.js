import React from 'react'
import { Icon } from '@hackclub/design-system'
import ScrollToTop from './style'

export default props => (
  <ScrollToTop role="button" {...props}>
    <Icon glyph="view-back" size={32} />
  </ScrollToTop>
)
