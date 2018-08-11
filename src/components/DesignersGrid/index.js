import React from 'react'

import { Grid } from './style'
import DesignerCard from '../DesignerCard'

export default ({ cols, designers }) => (
  <Grid cols={cols}>
    {designers.map(designer => {
      if (!designer) return null
      return <DesignerCard designer={designer} />
    })}
  </Grid>
)
