import styled from 'styled-components'
import { Box, Flex } from '@hackclub/design-system'

export const Container = styled(Flex).attrs({
  alignItems: 'flex-start',
  justifyContent: 'center',
})`
  width: 100%;
  max-width: 1024;
`

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(33%, max-content));
  grid-gap: 32px;
  width: 100%;
  max-width: 968px;

  ${props => props.theme.mediaQueries.lg} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }
`
