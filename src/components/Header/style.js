import styled from 'styled-components'
import { Box, Image } from '@hackclub/design-system'

export const Container = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "logo search buttons";
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.shadow ? props.theme.colors.snow : props.theme.colors.white};
  z-index: 3;
  box-shadow: ${props => props.shadow ? '0 4px 8px rgba(0,0,0,0.04)' : 'none'};
  transition: all 0.2s ease-in-out;

  @media (max-width: 968px) {
    padding: 8px 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "logo buttons" "search search";
  }
`
