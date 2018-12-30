import styled, { css } from 'styled-components'
import { Box, Flex, Input } from '@hackclub/design-system'

export const Container = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  pt: [1, null, 0]
})`
  grid-area: search;
  flex: 1 0 auto;
  position: relative;
`

const placeholder = css`
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
`
export const SearchInput = styled(Input)`
  border: 0;
  line-height: 2;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  background: ${props =>
    props.shadow ? props.theme.colors.gray[1] : props.theme.colors.white};
  color: ${({ theme }) => theme.colors.slate};
  box-shadow: ${props =>
    props.shadow ? 'none' : '0 4px 8px rgba(0,0,0,0.0625)'};
  border-radius: ${({ theme }) => theme.radii[2]};
  transition: box-shadow 0.25s ease-in-out, background 0.25s ease-in-out,
    transform 0.25s ease-in-out;

  // Love our WebKit
  ::-webkit-input-placeholder {
    ${placeholder};
  }
  // Firefox <18
  :-moz-placeholder {
    ${placeholder};
  }
  // Firefox
  ::-moz-placeholder {
    ${placeholder};
  }
  // Thanks Microsoft
  :-ms-input-placeholder {
    ${placeholder};
  }

  &:hover,
  &:focus {
    box-shadow: ${props =>
      props.shadow
        ? 'none'
        : '0 4px 8px rgba(0,0,0,0.0625), 0 8px 16px rgba(0,0,0,0.125)'};
  }
`

export const Hits = styled(Flex).attrs({
  flexDirection: 'column',
  width: 1
})`
  position: absolute;
  top: ${({ theme }) => theme.space[6]}px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.white} none repeat scroll 0% 0%;
  box-shadow: ${({ theme }) => theme.boxShadows[2]};
  transition: ${({ theme }) => theme.transition} all;
  border-radius: ${({ theme }) => theme.radii[2]};
  z-index: 999;
  flex: 0 0 auto;
  height: auto;
  max-height: 400px;
  max-width: 32rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

export const SearchProductContainer = styled(Flex).attrs({
  as: 'section',
  align: 'center',
  p: 3,
  width: 1
})`
  border-bottom: 1px solid ${({ theme }) => theme.colors.snow};
  flex: 1 0 auto;
  &:hover {
    background: ${({ theme }) => theme.colors.blue[0]};
    img {
      box-shadow: ${({ theme }) => theme.boxShadows[1]};
      transform: scale(${({ theme }) => theme.scaleFactor});
    }
  }
`

export const Image = styled(Box.withComponent('img'))`
  border-radius: ${({ theme }) => theme.radius};
  width: 40px;
  height: 40px;
  min-width: 40px;
  max-width: 40px;
  transform: scale(1);
  transition: ${({ theme }) => theme.transition} all;
`
