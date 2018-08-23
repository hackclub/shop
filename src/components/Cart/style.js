import styled from 'styled-components'
import { Badge, Box, Field, Flex, Heading, Text } from '@hackclub/design-system'
import Icon from 'spectrum-icons'

export const CartHeader = styled(Flex.withComponent(Heading.h2)).attrs({
  color: 'black'
})`
  align-items: center;
`

export const CartItemsHeader = styled(Flex).attrs({ mb: 2, align: 'baseline' })`
  p {
    width: 64px;
    text-align: center;
  }
  h3 {
    flex: 1 1 auto;
  }
`

export const ProductContainer = styled(Flex).attrs({ mb: 1, width: 1 })`
  align-items: center;
  label {
    margin-bottom: 0;
    div {
      display: none;
    }
  }
`

export const Thumbnail = styled.img`
  border-radius: ${({ theme }) => theme.radius};
  width: 40px;
  height: 40px;
  min-width: 40px;
  max-width: 40px;
`

export const CartContainer = styled(Box)`
  position: relative;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`

export const CartNumber = styled(Badge)`
  ${props => props.children === 0 && { display: 'none' }}
  border-radius: ${({ theme }) => theme.pill};
  position: absolute;
  right: -2px;
  bottom: -8px;
`

export const QuantitySelector = styled(Field).attrs({ mr: 2 })`
  max-width: 64px;
`

export const DeleteButton = styled(Box.withComponent(Icon)).attrs({
  role: 'button',
  color: 'muted',
  width: '64px'
})`
  cursor: pointer;
`

export const TotalCost = styled(Text).attrs({ mt: 4, f: 4, color: 'muted' })`
  float: left;
`
