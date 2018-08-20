import React from 'react'
import ContentLoader from 'react-content-loader'

export default props => (
  <ContentLoader
    height={320}
    width={320}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="320" height="320" />
  </ContentLoader>
)
