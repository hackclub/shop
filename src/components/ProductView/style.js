import styled, { keyframes } from 'styled-components'
import { Box, Flex, Text, Heading, Image } from '@hackclub/design-system'
import React from 'react'

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'content' 'sidebar';
  grid-gap: ${({ theme }) => theme.space[5]}px;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 20rem 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'sidebar content';
  }
`

export const Sidebar = styled(Box)`
  grid-area: sidebar;
`

export const Content = styled(Box)`
  grid-area: content;

  input {
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export const Breadcrumbs = styled(Text).attrs({
  bold: true,
  caps: true,
  color: 'slate',
  f: 4
})``

export const Title = styled(Heading.h1).attrs({
  f: 6,
  mt: 0,
  mb: 1
})`
  line-height: 1.125;
`

export const Description = styled(Heading.h2).attrs({
  f: 4,
  color: 'slate'
})`
  font-weight: 400;
`

export const Price = styled(Text).attrs({
  f: 5,
  mt: 2,
  mb: 3,
  color: 'muted'
})`
  text-indent: -4px;
  &:before {
    content: '$';
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
    vertical-align: text-top;
    width: 4px;
  }
`

export const Divider = styled(Box)`
  position: relative;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.smoke};
  width: 100%;
  margin-top: 48px;
`

export const Label = styled(Text.span).attrs({
  fontSize: 1,
  bg: 'snow',
  color: 'slate'
})`
  position: relative;
  top: -13px;
  padding: 2px 16px 2px 0;
  text-transform: uppercase;
  letter-spacing: 0.025em;
`

export const ImageGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 8px;
`

export const SmallImage = styled(Image)`
  border-radius: 8px;
  cursor: pointer;
  transform: scale(1);
  transition: ${({ theme }) => theme.transition} all;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
    transform: scale(${({ theme }) => theme.scaleFactor});
  }
`

const bouncingLoader = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
`

export const StyledBouncing = styled(Flex)`
  display: flex;
  justify-content: center;

  > div {
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background: ${({ theme }) => theme.colors.slate};
    border-radius: 50%;
    animation: ${bouncingLoader} 0.6s infinite alternate;
  }

  > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`

export const Bouncing = () => (
  <StyledBouncing>
    <div />
    <div />
    <div />
  </StyledBouncing>
)
