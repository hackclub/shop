import React, { Component } from 'react'
import { Container, ThemeProvider, cx } from '@hackclub/design-system'
import Helmet from 'react-helmet'
import { name, description, img, url } from '../../data.json'
import { throttle } from 'throttle-debounce'

import Header from '../Header'
import Transition from '../Transition'
import Footer from '../Footer'
import { ScrollToTop } from './style'
export { Gradient, SectionHeading } from './style'

export default class extends Component {
  constructor() {
    super()

    this.state = { headerShadow: false, scrollToTopVisible: false }
    this.handleScroll = throttle(300, this.handleScroll)
  }

  componentDidMount() {
    window && window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window && window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const headerShadow = window && window.pageYOffset > 0
    const scrollToTopVisible = window && window.pageYOffset > 240
    return this.setState({ headerShadow, scrollToTopVisible })
  }

  scrollToTop = () => {
    return window && window.scrollTo(0, 0)
  }

  render() {
    const { children } = this.props
    const { headerShadow, scrollToTopVisible } = this.state

    return (
      <ThemeProvider webfonts>
        <style
          children={`body {
              background: ${cx('snow')};
            }`}
        />
        <Helmet>
          <title>
            {this.props.title ? `${this.props.title} — ${name}` : name}
          </title>
          <html lang="en" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="theme-color" content="#e42d42" />
          <meta name="description" content={description} />
          <meta name="twitter:card" content="'summary_large_image" />
          <meta name="twitter:site" content="'@hackclub" />
          <meta name="twitter:domain" content={url} />
          <meta name="twitter:title" content={name} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={img} />
          <meta property="og:site_name" content={name} />
          <meta property="og:title" content={name} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={img} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
        </Helmet>
        <Header shadow={headerShadow} />
        <Container px={3} mt={[6, 6, 6, 5]}>
          <Transition>{children}</Transition>
          <ScrollToTop
            isVisible={scrollToTopVisible}
            onClick={this.scrollToTop}
            name="keyboard_arrow_up"
            size={32}
          />
        </Container>
        <Footer />
      </ThemeProvider>
    )
  }
}
