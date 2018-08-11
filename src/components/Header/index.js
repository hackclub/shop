import React from 'react'
import { Link } from 'gatsby'

import { Container } from './style'

export default ({shadow}) => (
   <Container shadow={shadow}>
    <Link to="/">
      logo
    </Link>
   </Container>
)
