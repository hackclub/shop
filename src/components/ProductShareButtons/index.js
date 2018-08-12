import React from 'react'
import { CopyLinkButton } from '../Button'
import { Container } from './style'
import { url } from '../../data.json'

export default ({ slug }) => (
  <Container>
    <CopyLinkButton text={url + slug}>Copy Link</CopyLinkButton>
  </Container>
)
