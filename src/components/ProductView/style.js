import styled from 'styled-components'
import { Box, Heading, hexa } from '@hackclub/design-system'

export const Grid = styled(Box)`
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 280px minmax(min-content, max-content);
  grid-gap: 64px;
  grid-template-rows: auto;
  grid-template-areas: 'sidebar content';
  max-width: 102px;
  @media (max-width: ${({ theme }) => theme.breakpoints[2]}em) {
    grid-template-columns: 240px minmax(min-content, max-content);
    grid-gap: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}em) {
    grid-template-columns: 1fr;
    grid-template-areas: 'content' 'sidebar';
    grid-gap: 16px;
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
  border-bottom: 1px solid ${props => props.theme.colors.smoke};
  width: 100%;
  margin-top: 48px;
`

export const Label = styled.span`
  position: relative;
  top: -13px;
  background: ${props => props.theme.colors.snow};
  padding: 2px 16px 2px 0;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.slate};
`
