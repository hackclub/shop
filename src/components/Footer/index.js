import React from 'react'
import { Box, Flex } from '@hackclub/design-system'
import Icon from 'spectrum-icons'

import { SocialLink, Footer, FooterLink } from './style'

export default () => (
  <Footer p={4} mt={5}>
    <Box>
      <SocialLink href="https://github.com/hackclub/shop">
        <Icon glyph="github" />
      </SocialLink>
      <SocialLink href="https://twitter.com/starthackclub">
        <Icon glyph="twitter" />
      </SocialLink>
      <SocialLink href="https://facebook.com/starthackclub">
        <Icon glyph="facebook" />
      </SocialLink>
    </Box>
    <br />

    <Flex>
      <span>
        Made by{' '}
        <FooterLink bold href="https://github.com/merelinguist">
          @merelinguist
        </FooterLink>
        {','}
        &nbsp;
        <FooterLink bold href="https://github.com/zanedb">
          @zanedb
        </FooterLink>
      </span>
    </Flex>
  </Footer>
)
