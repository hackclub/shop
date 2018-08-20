import styled from 'styled-components'
import { Flex } from '@hackclub/design-system'

const ScrollToTop = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  bg: 'primary',
  color: 'white'
})`
  position: fixed;
  bottom: ${({ theme }) => theme.space[4]}px;
  right: ${({ theme }) => theme.space[4]}px;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radii[4]};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  transition: ${({ theme }) => theme.transition} all;
  opacity: ${props => (props.isVisible ? '1' : '0')};
  background-image: linear-gradient(
    -86deg,
    ${({ theme }) => theme.colors.orange[5]},
    ${({ theme }) => theme.colors.red[5]},
    ${({ theme }) => theme.colors.red[6]}
  );
  transform: translateY(${props => (props.isVisible ? 0 : 80)}px);
  cursor: pointer;
  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.125), 0 8px 24px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
  &:active {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25), 0 8px 24px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }
  svg {
    transform: rotate(90deg);
  }
  @media (max-width: 968px) {
    bottom: ${({ theme }) => theme.space[3]}px;
    right: ${({ theme }) => theme.space[3]}px;
  }
`

export default ScrollToTop
