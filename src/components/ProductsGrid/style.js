import styled from 'styled-components'
import { Container } from '@hackclub/design-system'

export const Grid = Container.extend`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
`
