import React from 'react'
import { Link } from 'gatsby'

import { Container } from './style'
import Flag from '../Flag'

export default ({shadow}) => (
   <Container shadow={shadow}>
      <Flag />
   </Container>
)
