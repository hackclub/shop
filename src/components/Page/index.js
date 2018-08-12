import React, { Component } from 'react'
import { Container, Icon, ThemeProvider, cx } from '@hackclub/design-system'
import Helmet from 'react-helmet'
import { throttle } from 'throttle-debounce'

import Transition from '../Transition'
import { ScrollToTop } from './style'
export { Gradient, SectionHeading } from './style'

export default class extends Component {
  constructor() {
    super()

    this.state = { scrollToTopVisible: false }
    this.handleScroll = throttle(300, this.handleScroll)
  }

  componentDidMount() {
    window && window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window && window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollToTopVisible = window && window.pageYOffset > 240
    return this.setState({ scrollToTopVisible })
  }

  scrollToTop = () => {
    return window && window.scrollTo(0, 0)
  }

  render() {
    const { children } = this.props
    const { scrollToTopVisible } = this.state

    return (
      <ThemeProvider webfonts>
        <style
          children={`body {
      background: ${cx('snow')};
    }`}
        />
        <Helmet>
          <title>Hack Club Store</title>
        </Helmet>
        <Container px={3} py={[4, 5]}>
          <Transition>{children}</Transition>
          <ScrollToTop
            isVisible={scrollToTopVisible}
            onClick={this.scrollToTop}
            name="keyboard_arrow_up"
            size={32}
          />
        </Container>
      </ThemeProvider>
    )
  }
}
