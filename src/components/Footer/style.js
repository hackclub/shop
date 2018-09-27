import styled from 'styled-components'
import { Flex, Link } from '@hackclub/design-system'

export const SocialLink = styled(Link).attrs({
  target: '_blank',
  mx: 2
})`
  color: ${({ theme }) => theme.colors.slate};
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`

export const Footer = styled(Flex).attrs({
  as: 'footer',
  flexDirection: 'column',
  justify: 'center',
  align: 'center',
  wrap: 'wrap',
  bg: 'smoke',
  color: 'slate',
  px: 3,
  py: 4,
  mt: 5
})`
  flex-shrink: 0;
`

export const FooterLink = styled(Link).attrs({
  target: '_blank',
  color: 'inherit',
  bold: true
})`
  &:hover {
    text-decoration: underline;
  }
`
