import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Flex, theme, Heading } from '@hackclub/design-system'

const Card = styled(Link)`
  position: relative;
  transition: ${theme.transition};

  &:hover {
    transform: translateY(-0.25rem) scale(1.0125);
  }
`

const Image = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 25rem;
  border-radius: 0.5rem;

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'; // needed for IE9+ polyfill
  }
`

const Content = styled(Flex)`
  position: absolute;
  bottom: 0;
  left: 0;
`
export default props => {
  const {
    product: {
      title,
      handle,
      description,
      variants: [firstVariant],
      images: [firstImage]
    }
  } = props

  const {
    localFile: {
      childImageSharp: { fluid }
    }
  } = firstImage

  return (
    <Card to={handle}>
      <Image fluid={fluid} />
      <Content p={3}>
        <Heading.h3 fontSize={5} color="white">
          {title}
        </Heading.h3>
      </Content>
    </Card>
  )
}
