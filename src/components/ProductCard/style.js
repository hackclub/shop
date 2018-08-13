import styled from 'styled-components'
import Card from '../Card'
import { Flex } from '@hackclub/design-system'

export const Item = styled(Card)`
  max-width: 40rem;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }
`

export const LoadingBase = styled(Flex)`
  height: 0;
  position: relative;
  padding-bottom: 100%;
  flex-direction: column;
  justify-content: center;
`
