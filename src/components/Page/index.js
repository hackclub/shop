import React, { Component, Fragment } from 'react'
import { ThemeProvider } from '@hackclub/design-system'
import { throttle } from 'throttle-debounce'

import { Container, InnerContainer } from './style'
import Header from '../Header'
import Footer from '../Footer'

export default class extends Component {
  constructor() {
    super()

    this.state = { headerShadow: false }
    this.handleScroll = throttle(300, this.handleScroll)
    this.lastTrackedPageview = null
  }

  componentDidMount() {
    window && window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window && window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const headerShadow = window && window.pageYOffset > 0
    return this.setState({ headerShadow })
  }

  scrollToTop = () => {
    return window && window.scrollTo(0, 0)
  }

  render() {
    const { headerShadow } = this.state
    const { children } = this.props

    return (
      <ThemeProvider webfonts>
        <Container bg="snow">
          <Header shadow={headerShadow} />
          <InnerContainer>
            <Fragment>{children}</Fragment>
          </InnerContainer>
          <Footer />
        </Container>
      </ThemeProvider>
    )
  }
}
