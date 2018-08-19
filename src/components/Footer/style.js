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

export const Footer = styled(Flex.withComponent('footer'))`
  flex-shrink: 0;
`
Footer.defaultProps = {
  flexDirection: 'column',
  justify: 'center',
  align: 'center',
  wrap: true,
  bg: 'smoke',
  color: 'slate'
}

export const FooterLink = styled(Link)`
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`
