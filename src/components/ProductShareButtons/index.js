import React from 'react'
import { CopyLinkButton } from '../Button'
import { Container } from './style'
import data from '../../data.json'

const { url } = data

export default ({ slug }) => (
  <Container>
    <CopyLinkButton text={url + slug}>Copy Link</CopyLinkButton>
  </Container>
)
