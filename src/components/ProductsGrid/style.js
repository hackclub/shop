import styled from 'styled-components'
import { Box } from '@hackclub/design-system'

export const Container = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 968px;
`

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(33%, max-content));
  grid-gap: 32px;
  width: 100%;
  max-width: 968px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }
`
