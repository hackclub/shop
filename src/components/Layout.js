import React from 'react'
import { ThemeProvider } from '@hackclub/design-system'
import Meta from './Meta'

export default ({ children }) => (
  <ThemeProvider webfonts>
    <Meta />
    {children}
  </ThemeProvider>
)
