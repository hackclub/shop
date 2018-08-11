import React, { Fragment } from 'react'
import { ThemeProvider } from '@hackclub/design-system'

import { Container, InnerContainer } from './style'
import Footer from '../Footer/index.js'

export default props => (
  <ThemeProvider webfonts>
    <Container>
      <InnerContainer>
        <Fragment>
          {props.children}
        </Fragment>
      </InnerContainer>
    </Container>
  </ThemeProvider>
)
