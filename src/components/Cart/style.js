import styled from 'styled-components'
import { IconButton } from '@hackclub/design-system'

export const ProductContainer = styled.section`
  padding: 12px;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  align-items: center;
  &:hover {
    background: ${props => props.theme.colors.snow};
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
