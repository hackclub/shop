import React from 'react'
import { CopyLinkButton } from '../Button'
import { Container } from './style'

export default ({ slug }) => (
  <Container>
    <CopyLinkButton text={`https://hackclub-shop.netlify.com/${slug}`}>
      Copy
    </CopyLinkButton>
  </Container>
)
