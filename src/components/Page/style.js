import styled from 'styled-components'
import { Box, Heading } from '@hackclub/design-system'

export const SectionHeading = Heading.h2.extend.attrs({
  f: [4, 5],
  color: 'black',
  align: 'center',
  mt: [3, 4],
  p: 3
})``

export const Gradient = Box.extend`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.white},
    ${({ theme }) => theme.colors.snow}
  );
`
