import styled from 'styled-components'
import Card from '../Card'
import { theme } from '@hackclub/design-system'

export const Item = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${theme.mediaQueries.md} {
    grid-column: span 2;
  }
`
