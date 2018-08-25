import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
  'https://placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500'
]

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state
    const { images } = this.props

    const flatImages = images.edges.map(i => i.node.src)

    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={flatImages[photoIndex]}
            nextSrc={flatImages[(photoIndex + 1) % flatImages.length]}
            prevSrc={
              flatImages[
                (photoIndex + flatImages.length - 1) % flatImages.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + flatImages.length - 1) % flatImages.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % flatImages.length
              })
            }
          />
        )}
      </div>
    )
  }
}
