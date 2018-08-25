import React, { Fragment } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

export default ({
  images,
  open,
  photoIndex,
  closeBox,
  prevImage,
  nextImage
}) => {
  const flatImages = images.edges.map(i => i.node.src)

  return (
    <Fragment>
      {open && (
        <Lightbox
          mainSrc={flatImages[photoIndex]}
          nextSrc={flatImages[(photoIndex + 1) % flatImages.length]}
          prevSrc={
            flatImages[(photoIndex + flatImages.length - 1) % flatImages.length]
          }
          onCloseRequest={closeBox}
          onMovePrevRequest={prevImage}
          onMoveNextRequest={nextImage}
        />
      )}
    </Fragment>
  )
}
