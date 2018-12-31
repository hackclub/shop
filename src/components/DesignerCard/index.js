import React from 'react'
import { Avatar, Flex, Heading } from '@hackclub/design-system'
import VisibilitySensor from 'react-visibility-sensor'

import Card from '../Card'

export default ({ designer }) => (
  <a href={designer.website} target="_blank" rel="noreferrer noopener">
    <Card>
      <Flex alignItems="center" p={3}>
        <VisibilitySensor>
          <Avatar size={40} src={designer.avatar} alt={designer.name} />
        </VisibilitySensor>
        <Flex flexDirection="column" justify="center" ml={3}>
          <Heading.h4 bold color="black">
            {designer.name}
          </Heading.h4>
          <Heading.h5 color="muted" style={{ fontWeight: 400 }}>
            {designer.handle}
          </Heading.h5>
        </Flex>
      </Flex>
    </Card>
  </a>
)
