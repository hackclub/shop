import React from 'react'
import { Box, Flex, Icon } from '@hackclub/design-system'

import { SocialLink, Footer, FooterLink } from './style'

export default () => (
  <Footer>
    <Box mb={2}>
      <SocialLink href="https://github.com/hackclub/shop">
        <Icon glyph="github" />
      </SocialLink>
      <SocialLink href="https://twitter.com/hackclub">
        <Icon glyph="twitter" />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/Hack-Club-741805665870458">
        <Icon glyph="facebook" />
      </SocialLink>
      <SocialLink href="mailto:shop@hackclub.com">
        <Icon glyph="email" />
      </SocialLink>
    </Box>
    <Flex>
      <span>
        Made by{' '}
        <FooterLink href="https://github.com/merelinguist">
          @merelinguist
        </FooterLink>
        {', '}
        <FooterLink href="https://github.com/zanedb">@zanedb</FooterLink>
        {', + '}
        <FooterLink href="https://github.com/lachlanjc">@lachlanjc</FooterLink>
      </span>
    </Flex>
  </Footer>
)
