import { Box, Link } from '@hackclub/design-system'

export const Base = Box.withComponent('footer').extend`
  background: ${({ theme }) =>
    theme.colors.snow} url('https://hackclub.com/pattern.svg') repeat;
  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: ${({ theme }) => theme.space[4]}px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`
export const Wrapper = Box.withComponent(Link).extend`
  display: flex;
  justify-content: center;
  align-items: center;
`
