import React from 'react'
import { cx } from '@hackclub/design-system'

export default ({ color }) => (
  <style children={`body{background:${cx(color)};}`} />
)
