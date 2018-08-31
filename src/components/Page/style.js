import styled from 'styled-components'
import { Box, Heading, Text } from '@hackclub/design-system'

export const SectionHeading = styled(Heading.h1).attrs({
  color: 'black',
  align: 'center',
  px: 3,
  mt: [3, 4],
  pt: [0, 3]
})`
  line-height: 1.125;
`

export const SectionDescription = styled(Text).attrs({
  f: 3,
  mt: 2,
  mb: [3, 4],
  color: 'muted',
  align: 'center'
})``

export const Gradient = styled(Box)`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.white},
    ${({ theme }) => theme.colors.snow}
  );
`
