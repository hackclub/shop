import styled, { css } from 'styled-components'
import { Link } from '@hackclub/design-system'
import { Box, Flex } from '@hackclub/design-system'

export const Container = styled(Box).attrs({
  bg: props => (props.shadow ? 'white' : 'snow'),
  align: 'center',
  p: [3, 2]
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'logo actions' 'search search';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  box-shadow: ${props =>
    props.shadow ? '0 4px 8px rgba(0,0,0,0.125)' : 'none'};
  transition: ${({ theme }) => theme.transition} all;
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: 'logo search actions';
  }
`

export const Logo = styled(Link)`
  margin-top: -20px;
  background: url(/flag.svg) no-repeat;
  background-position: top center;
  flex-shrink: 0;
  width: 112px;
  height: 48px;
  transition: ${({ theme }) => theme.transition} transform;
  transform-origin: top left;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 144px;
    height: 72px;
  }
  ${props =>
    props.shadow &&
    css`
      ${({ theme }) => theme.mediaQueries.md} {
        transform: scale(0.8);
        height: 60px !important;
      }
    `};
`

export const ButtonRowContainer = styled(Flex).attrs({
  justify: 'center',
  align: 'flex-end',
  flexDirection: 'column'
})`
  grid-area: actions;
`
