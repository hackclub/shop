import React from 'react'
import { Text, Link, Card } from '@hackclub/design-system'

export default () => (
  <Card boxShadowSize="md" p={3} my={3} bg="white">
    <Text bold f={3}>
      Are you a club leader or need stickers for your event?
    </Text>
    <Text f={2}>
      Reach out to us via{' '}
      <Link href="mailto:team@hackclub.com">team@hackclub.com</Link> or{' '}
      <Link href="https://hackclub.slack.com/messages/hq">#hq on Slack</Link>.
    </Text>
  </Card>
)
