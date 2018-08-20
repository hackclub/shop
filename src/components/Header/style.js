import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { Box } from '@hackclub/design-system'

export const Container = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'logo search actions';
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props =>
    props.shadow ? props.theme.colors.white : props.theme.colors.snow};
  z-index: 3;
  box-shadow: ${props =>
  transition: all 0.2s ease-in-out;
    props.shadow ? '0 4px 8px rgba(0,0,0,0.125)' : 'none'};
  @media (max-width: 1024px) {
    padding: 8px 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'logo actions' 'search search';
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

export const ButtonRowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-area: actions;
  align-items: center;
  @media (max-width: 968px) {
  }
`
