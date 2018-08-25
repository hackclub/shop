import styled, { keyframes } from 'styled-components'
import { Box, Card } from '@hackclub/design-system'

export const modalKeyframes = keyframes`
  0% {
    transform: translate(-5%, -90%) scale(0);
  }

  85% {
    transform: translate(-50%, -50%) scale(1.025);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`

export const Modal = styled(Card).attrs({
  boxShadowSize: 'lg',
  bg: 'white'
})`
  border-radius: ${({ theme }) => theme.radii[2]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1100;

  ${({ theme }) => theme.mediaQueries.md} {
    animation: ${modalKeyframes} ease-in 0.25s;
  }

  // Responsive size control
  width: ${props => props.w || props.width || '36rem'};
  max-width: 95vw;
  max-height: 95vh;
  margin: 0 auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  > button:first-child {
    position: fixed;
    top: 0;
    right: 0;
  }
`

export const Overlayer = styled(Box)`
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.375);
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
