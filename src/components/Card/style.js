import styled from 'styled-components'
import { Box } from '@hackclub/design-system'

export const Card = styled(Box)`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii[2]};
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.0625), 0 8px 32px rgba(0, 0, 0, 0.125);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.0625),
      0 16px 48px rgba(0, 0, 0, 0.125);
    transform: translateY(-4px);
  }

  &:active {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.125),
      0 12px 36px rgba(0, 0, 0, 0.125);
    transform: translateY(-2px);
  }
`
