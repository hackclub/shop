import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Flex, theme, Heading, Text, Icon } from '@hackclub/design-system'

const Card = styled(Link)`
  position: relative;
  border-radius: 0.5rem;
  transition: transform ${theme.transition};

  &:hover {
    transform: translateY(-0.25rem) scale(1.0125);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px white;
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

const Content = styled(Flex).attrs({
  flexDirection: 'column'
})`
  position: absolute;
  bottom: 0;
  left: 0;

  h3 {
    text-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.25);
  }
`

const Overlay = styled(Flex).attrs({
  flexDirection: 'column',
  align: 'center',
  justify: 'center'
})`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0.5rem;

  p {
    text-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.25);
  }
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
    <Card
      to={handle}
      aria-label={`View more about ${title}, available for ${
        firstVariant.price
      }`}
    >
      <Image fluid={fluid} />
      {firstVariant.availableForSale ? (
        <Content p={3}>
          <Heading.h3 fontSize={5} color="white">
            {title}
          </Heading.h3>
          <Text fontSize={3} color="rgba(255, 255, 255, 0.8)">
            {JSON.parse(description).description} - ${firstVariant.price}
          </Text>
        </Content>
      ) : (
        <Overlay>
          <Icon glyph="private" size={64} color="white" />
          <Text fontSize={[4, 5]} fontWeight={700} color="white">
            Out of stock
          </Text>
        </Overlay>
      )}
    </Card>
  )
}
