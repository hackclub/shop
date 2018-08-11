import React from 'react'
import { ThemeProvider } from '@hackclub/design-system'

export default props => (
  <ThemeProvider webfonts>
    {props.children}
  </ThemeProvider>
)
