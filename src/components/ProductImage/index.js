import React from 'react'
import Card from '../Card'
import { BlurredArt, Art } from './style'
import ImageLoader from '../ImageLoader'
import VisibilitySensor from 'react-visibility-sensor'

export default ({ src, alt }) => (
  <VisibilitySensor>
    <Card>
      <BlurredArt src={src} alt={alt} />
      <Art src={src} alt={alt} loaderComponent={<ImageLoader />} />
    </Card>
  </VisibilitySensor>
)
