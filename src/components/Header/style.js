import styled from 'styled-components'
import { Flex } from '@hackclub/design-system'

export const Container = styled(Flex).attrs({
  pt: 0,
  px: [null, 3, 4],
  pb: 2,
  justify: 'space-between',
  align: 'center',
  w: 1
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.shadow ? props.theme.colors.snow : props.theme.colors.white};
  z-index: 3;
  box-shadow: ${props => props.shadow ? '0 4px 8px rgba(0,0,0,0.04)' : 'none'};
  transition: all 0.2s ease-in-out;
`
