import styled from 'styled-components'
import { Box, Heading as H } from '@hackclub/design-system'

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  max-width: 100%;
`

export const InnerContainer = styled(Box)`
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

export const SectionHeading = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 72px;
  margin-bottom: 48px;
  max-width: 50%;
  @media (max-width: 968px) {
    align-items: flex-start;
    max-width: 100%;
  }
`

export const Heading = styled(H.h3)`
  font-size: 40px;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  text-align: center;
  @media (max-width: 968px) {
    text-align: left;
    max-width: 100%;
  }
`

export const Subheading = styled(H.h4)`
  font-size: 22px;
  font-weight: 400;
  color: ${props => props.theme.colors.slate};
  text-align: center;

  @media (max-width: 968px) {
    text-align: left;
    max-width: 100%;
  }
`
