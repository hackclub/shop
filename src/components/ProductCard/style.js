import styled from 'styled-components'
import { Image } from '@hackclub/design-system'

import Card from '../Card'

export const Item = styled(Card)`
  max-width: 40rem;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`
export const ImageSpacer = styled.div`
  width: 70%;
  padding-bottom: 70%;
`

export const StyledImage = styled(Image)`
  position: absolute;
  top: 0px;
  left: 0px;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
`
