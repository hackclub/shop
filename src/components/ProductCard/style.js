import styled from 'styled-components'
import { Box, Flex } from '@hackclub/design-system'

export const Base = styled(Box)`
  opacity: 1 !important;
  padding: ${({ theme }) => theme.space[2]};
  text-decoration: none;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries[1]} {
    width: 50%;
  }
  ${({ theme }) => theme.mediaQueries[2]} {
    width: 33.33%;
  }
`

export const ProductCard = Flex.extend.attrs({
  flexDirection: 'column',
  align: 'center',
  w: 1,
  p: 5,
  m: [1, 2],
  color: 'white',
  boxShadowSize: 'md'
})`
  border-radius: ${({ theme }) => theme.radius};
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.375);
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.375) 75%),
    url(${props => props.bg}) no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`
