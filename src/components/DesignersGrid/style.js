import styled from 'styled-components'
import { Box } from '@hackclub/design-system'

export const Grid = styled(Box).attrs({
  my: 3,
  mx: 0,
  width: 1
})`
  display: grid;
  grid-gap: ${({ theme }) => theme.space[3]}px;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-template-rows: auto;
  max-width: 1128px;
  @media (max-width: 968px) {
    grid-template-columns: repeat(${props => (props.cols > 2 ? 2 : 1)}, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
