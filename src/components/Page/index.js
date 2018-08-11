import React from 'react'
import { ThemeProvider } from '@hackclub/design-system'
import Helmet from 'react-helmet'

import Transition from '../Transition'
export { Gradient, SectionHeading } from './style'

export default props => (
  <ThemeProvider webfonts>
    <Helmet>
      <title>Hack Club Store</title>
    </Helmet>
    <Transition>{props.children}</Transition>
  </ThemeProvider>
)
