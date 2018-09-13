import React from 'react'
import { Text, Link, Card } from '@hackclub/design-system'

export default () => (
  <Card boxShadowSize="sm" p={3} my={3} bg="white">
    <Text bold f={3}>
      Need stickers in bulk for your event?
    </Text>
    <Text f={2}>
      Reach out to us:{' '}
      <Link href="mailto:team@hackclub.com">team@hackclub.com</Link>
    </Text>
  </Card>
)
