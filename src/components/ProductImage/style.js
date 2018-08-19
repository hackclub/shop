import styled from 'styled-components'
import Img from 'react-image'

export const BlurredArt = styled(Img)`
  border-radius: ${({ theme }) => theme.radii[2]};
  position: absolute;
  width: 106.25%;
  height: 106.25%;
  left: -3.125%;
  filter: blur(12px);
  opacity: 0.5;
  z-index: 1;

  /* there are some problems with blurring images on mobile devices and perf */
  @media (max-width: 468px) {
    display: none;
  }
`

export const Art = styled(Img)`
  border-radius: ${({ theme }) => theme.radii[2]};
  width: 100%;
  height: 100%;
  margin-bottom: -6px;
  position: relative;
  z-index: 2;
`
