import styled from 'styled-components'
import { Box, Heading, IconButton } from '@hackclub/design-system'

export const SectionHeading = Heading.h1.extend.attrs({
  color: 'black',
  align: ['left', 'center'],
  p: [null, 3]
})``

export const Gradient = Box.extend`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.white},
    ${({ theme }) => theme.colors.snow}
  );
`

export const ScrollToTop = styled(IconButton)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 32px;
  right: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-in-out;
  opacity: ${props => (props.isVisible ? '1' : '0')};
  background-color: rgb(228, 45, 66);
  background-image: linear-gradient(
    -86deg,
    ${({ theme }) => theme.colors.orange[5]},
    ${({ theme }) => theme.colors.red[5]},
    ${({ theme }) => theme.colors.red[6]}
  );
  color: ${props => props.theme.colors.white};
  transform: translateY(${props => (props.isVisible ? '0' : '80px')});
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
    transition: all 0.2s ease-in-out;
  }
  &:active {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.09);
    transform: translateY(-2px);
    transition: all 0.2s ease-in-out;
  }
  .icon {
    transform: rotate(270deg);
  }
  @media (max-width: 968px) {
    bottom: 16px;
    right: 16px;
  }
`
