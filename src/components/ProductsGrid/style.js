import styled from 'styled-components'
import { Box } from '@hackclub/design-system'

export const Grid = Box.extend`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: ${({ theme }) => theme.space[3]}px;
  counter-reset: li;
  list-style: none;
  padding: 0;
  a {
    text-decoration: none;
  }
`
