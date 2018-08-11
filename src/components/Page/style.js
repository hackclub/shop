import styled from 'styled-components'
import { Box } from '@hackclub/design-system'

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  max-width: 100%;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1 0 auto;
  padding-top: 64px;
  padding-left: 32px;
  padding-right: 32px;
  position: relative;
  @media (max-width: 968px) {
    align-items: flex-start;
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 96px;
  }
`
