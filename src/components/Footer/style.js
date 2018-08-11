import styled from 'styled-components'
import { Box, Text } from '@hackclub/design-system'

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 128px;
  padding: 0 16px;
`

export const Description = styled(Text)`
  font-size: 14px;
  color: ${props => props.theme.colors.slate};
  max-width: 320px;
  display: flex;
  flex: 1 0 auto;
  align-items: flex-start;
  padding-bottom: 16px;
`

export const Icons = styled(Box)`
  display: flex;
  flex: 1 0 auto;
  align-items: flex-start;
  margin-left: -16px;
  padding-bottom: 8px;

  a {
    color: ${props => props.theme.colors.slate};
  }

  a:hover {
    color: ${props => props.theme.colors.black};
  }

  svg {
    margin-left: 16px;
  }
`
