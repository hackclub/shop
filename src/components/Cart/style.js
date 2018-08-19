import styled from 'styled-components'
import { Badge, Box, IconButton } from '@hackclub/design-system'

export const ProductContainer = styled.section`
  padding: 12px;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.colors.snow};
  }
`

export const Thumbnail = styled.img`
  border-radius: 4px;
  width: 40px;
  height: 40px;
  min-width: 40px;
  max-width: 40px;
`

export const RemoveButton = styled(IconButton)`
  margin-left: auto;
`

export const CartContainer = styled(Box)`
  position: relative;
`

export const CartNumber = styled(Badge)`
  ${props => props.children === 0 && { display: 'none' }}
  border-radius: ${({ theme }) => theme.pill};
  position: absolute;
  right: -2px;
  bottom: -8px;
`
