import styled from 'styled-components'
import { Box, Heading } from '@hackclub/design-system'

export const SectionHeading = Heading.h1.extend.attrs({
  color: 'black',
  align: 'center',
  px: 3,
  my: 4
})`line-height: 1.125;`

export const Gradient = Box.extend`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.white},
    ${({ theme }) => theme.colors.snow}
  );
`
