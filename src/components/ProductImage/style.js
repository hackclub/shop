import styled from 'styled-components'
import { Image } from '@hackclub/design-system'

export const BlurredArt = styled(Image)`
  // there are some problems with blurring images on mobile devices and perf
  display: none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
    border-radius: ${({ theme }) => theme.radii[2]};
    position: absolute;
    width: 106.25%;
    height: 106.25%;
    left: -3.125%;
    filter: blur(12px);
    opacity: 0.375;
    z-index: 1;
  }
`

export const Art = styled(Image)`
  border-radius: ${({ theme }) => theme.radii[2]};
  width: 100%;
  height: 100%;
  margin-bottom: -6px;
  position: relative;
  z-index: 2;
  cursor: pointer;
`
