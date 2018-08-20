import styled from 'styled-components'
import { Box, Text, Heading } from '@hackclub/design-system'

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'content' 'sidebar';
  grid-gap: ${({ theme }) => theme.space[3]}px;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 20rem 1fr;
    grid-gap: ${({ theme }) => theme.space[5]}px;
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

export const Title = styled(Heading.h1).attrs({
  f: 6,
  mt: 0,
  mb: 1
})``

export const Description = styled(Heading.h2).attrs({
  f: 4,
  regular: true,
  color: 'slate'
})``

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

export const Label = styled.span`
  position: relative;
  top: -13px;
  background: ${({ theme }) => theme.colors.snow};
  padding: 2px 16px 2px 0;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.slate};
`
