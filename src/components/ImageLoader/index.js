import React from 'react'
import { cx } from '@hackclub/design-system'
import ContentLoader from 'react-content-loader'

export default props => (
  <ContentLoader
    height={320}
    width={320}
    speed={2}
    primaryColor={cx('snow')}
    secondaryColor={cx('smoke')}
    {...props}
  >
    <rect x="0" y="0" width="400" height="400" />
  </ContentLoader>
)
