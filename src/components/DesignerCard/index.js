import React from 'react'
import { Avatar, Flex, Heading } from '@hackclub/design-system'
import VisibilitySensor from 'react-visibility-sensor'

import Card from '../Card'

export default ({ designer }) => (
  <a
    href={`https://github.com/${designer}`}
    target={'_blank'}
    rel={'noreferrer noopener'}
  >
    <Card>
      <Flex alignItems="center" p={3}>
        <VisibilitySensor>
          <Avatar
            size={40}
            src={`https://github.com/${designer}.png`}
            alt={designer}
          />
        </VisibilitySensor>
        <Flex flexDirection="column" justifyContent="center" ml={3}>
          <Heading.h4 bold color="black">
            {designer}
          </Heading.h4>
          <Heading.h5 regular color="muted">
            @{designer}
          </Heading.h5>
        </Flex>
      </Flex>
    </Card>
  </a>
)
