import React, { Component } from 'react'
import { Avatar, Flex, Heading } from '@hackclub/design-system'
import VisibilitySensor from 'react-visibility-sensor'

import Card from '../Card'

export default class extends Component {
  render() {
    const designerInfo = this.props.designer.split(';')
    const name = designerInfo[0]
    const handle = designerInfo[1]
    const image = designerInfo[2]
    const site = designerInfo[3]

    return (
      <a href={site} target="_blank" rel="noreferrer noopener">
        <Card>
          <Flex alignItems="center" p={3}>
            <VisibilitySensor>
              <Avatar size={40} src={image} alt={name} />
            </VisibilitySensor>
            <Flex flexDirection="column" justify="center" ml={3}>
              <Heading.h4 bold color="black">
                {name}
              </Heading.h4>
              <Heading.h5 regular color="muted">
                {handle}
              </Heading.h5>
            </Flex>
          </Flex>
        </Card>
      </a>
    )
  }
}
