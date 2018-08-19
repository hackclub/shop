import styled from 'styled-components'
import { Box, Heading } from '@hackclub/design-system'

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'content' 'sidebar';
  grid-gap: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 20rem 1fr;
    grid-gap: 64px;
    grid-template-rows: auto;
    grid-template-areas: 'sidebar content';
  }
`

export const Sidebar = styled(Box)`
  grid-area: sidebar;
`

export const Content = styled(Box)`
  grid-area: content;
`

export const Title = styled(Heading.h1).attrs({
  f: 5,
  color: 'black'
})`
  letter-spacing: 0.8px;
`

export const Description = styled(Heading.h2).attrs({
  f: 3,
  regular: true,
  color: 'muted'
})`
  line-height: 1.4rem;
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
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.slate};
`
