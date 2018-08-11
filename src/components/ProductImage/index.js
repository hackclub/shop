import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import { BlurredArt, Art } from './style'
import Card from '../Card'

export default ({src, alt}) => (
  <VisibilitySensor>
    <Card>
      <BlurredArt src={src} alt={alt} />
      <Art src={src} alt={alt} />
    </Card>
  </VisibilitySensor>
)
