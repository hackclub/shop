import React from 'react'

export default props => {
  const {
    product,
    product: { id, images, variants }
  } = props

  return <p>{product.title}</p>
}
