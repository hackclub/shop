import styled from 'styled-components'
import { Box } from '@hackclub/design-system'

export const Grid = styled(Box)`
  display: grid;
  grid-gap: 1rem;
  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
`
