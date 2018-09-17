import React, { Component } from 'react'
import { Box } from '@hackclub/design-system'
import { Link } from 'gatsby'
import FadeIn from 'react-lazyload-fadein'

import {
  Grid,
  ImageGrid,
  SmallImage,
  Sidebar,
  Content,
  Breadcrumbs,
  Title,
  Description,
  Price,
  Divider,
  Label,
  Bouncing
} from './style'
import ProductImage from '../ProductImage'
import DesignersGrid from '../DesignersGrid'
import ProductShareButtons from '../ProductShareButtons'
import LightBox from './LightBox'
import AddToCart from '../AddToCart'

export default class extends Component {
  state = {
    open: false,
    photoIndex: 0
  }

  openBox = image =>
    this.setState({
      open: true,
      photoIndex: image
    })

  closeBox = () =>
    this.setState({
      open: false
    })

  prevImage = () =>
    this.setState({
      photoIndex:
        (this.state.photoIndex + this.props.product.images.edges.length - 1) %
        this.props.product.images.edges.length
    })

  nextImage = () =>
    this.setState({
      photoIndex:
        (this.state.photoIndex + 1) % this.props.product.images.edges.length
    })

  render() {
    const { open, photoIndex } = this.state
    const {
      product: {
        title,
        id,
        description,
        availableForSale,
        variants,
        images,
        fields: { slug, image }
      }
    } = this.props
    const productInfo = JSON.parse(description) // parse product info from JSON
    return (
      <Grid my={[4, 5]}>
        <LightBox
          images={images}
          open={open}
          photoIndex={photoIndex}
          closeBox={this.closeBox}
          prevImage={this.prevImage}
          nextImage={this.nextImage}
        />
        <Sidebar>
          <Box onClick={() => this.openBox(0)}>
            <ProductImage src={image} alt={title} />
          </Box>
          <ImageGrid>
            {images.edges.slice(1).map((image, index) => (
              <Box style={{ position: 'relative' }} mt={3}>
                <FadeIn height={150} placeholder={<Bouncing />} debounce={1000}>
                  {onload => (
                    <SmallImage
                      src={image.node.src}
                      alt=""
                      onLoad={onload}
                      onClick={() => this.openBox(index + 1)}
                    />
                  )}
                </FadeIn>
              </Box>
            ))}
          </ImageGrid>
          <ProductShareButtons slug={slug} />
          {productInfo.designers &&
            productInfo.designers.length !== 0 && (
              <>
                <Divider>
                  <Label>Designed By</Label>
                </Divider>
                <DesignersGrid designers={productInfo.designers} />
              </>
            )}
        </Sidebar>

        <Content>
          <Breadcrumbs>
            <Link to="/">All Products ›</Link>
          </Breadcrumbs>
          <Title>{title}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: productInfo.description }}
          />
          <Price>{variants.edges[0].node.price}</Price>
          <AddToCart
            variants={variants}
            availableForSale={availableForSale}
            exists={productInfo.exists}
            title={title}
            id={id}
          />
        </Content>
      </Grid>
    )
  }
}
