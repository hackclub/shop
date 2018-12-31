import styled from 'styled-components'
import { Text, Field } from '@hackclub/design-system'

export const Highlight = styled(Text.span)`
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(250, 247, 133, 0.33),
    rgba(250, 247, 133, 0.66) 95%,
    rgba(250, 247, 133, 0.1)
  );
`

export const StyledField = styled(Field)`
  max-width: 24rem;
`
