import styled from 'styled-components'
import { Flex, Link } from '@hackclub/design-system'

export const SocialLink = styled(Link).attrs({
  target: '_blank'
})`
  color: ${({ theme }) => theme.colors.slate};
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`

export const Footer = styled(Flex.withComponent('footer'))`
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.slate};
  background: ${({ theme }) => theme.colors.smoke};
  box-sizing: border-box;
`

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.slate};
  &:hover {
    text-decoration: underline;
  }
`
