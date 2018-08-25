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
  Title,
  Description,
  Price,
  Divider,
  Label
} from './style'
import ProductImage from '../ProductImage'
import DesignersGrid from '../DesignersGrid'
import ProductShareButtons from '../ProductShareButtons'
import LightBox from './LightBox'
import AddToCart from '../AddToCart'

export default class extends Component {
  state = {
    open: false
  }

  openBox = () => (
    this.setState({
      open: true
    })
  )

  closeBox = () => (
    this.setState({
      open: false
    })
  )

  render() {
    const { open } = this.state
    const {
      product: {
        id,
        title,
        descriptionHtml,
        tags,
        variants,
        images,
        fields: { slug, image }
      }
    } = this.props
    return (
      <Grid my={[4, 5]}>
        <Sidebar>
          <ProductImage src={image} alt={title} onClick={this.openBox} />
          <ImageGrid>
            {images.edges.slice(1).map(image => (
              <Box style={{ position: 'relative' }} mt={3}>
                <FadeIn>
                  {onload => (
                    <SmallImage src={image.node.src} alt="" onLoad={onload} onClick={this.openBox} />
                  )}
                </FadeIn>
              </Box>
            ))}
          </ImageGrid>
          <LightBox images={images} open={open} openBox={this.openBox} closeBox={this.closeBox} />
          <ProductShareButtons slug={slug} />
          {tags && (
            <>
              <Divider>
                <Label>Designed By</Label>
              </Divider>
              {tags && <DesignersGrid designers={tags} />}
            </>
          )}
        </Sidebar>

        <Content>
          <Title>{title}</Title>
          <Description dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
          <Price>{variants.edges[0].node.price}</Price>
          <AddToCart variants={variants} />
        </Content>
      </Grid>
    )
  }
}
