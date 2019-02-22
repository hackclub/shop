import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {
  Flex,
  Container,
  Box,
  theme,
  mediaQueries
} from '@hackclub/design-system'

const Base = styled(Flex).attrs({
  align: 'center'
})`
  border-bottom-width: 1px;
  border-color: #f1f5f8;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  height: 4rem;
`

const Inner = styled(Container).attrs({
  maxWidth: 80,
  px: 4
})`
  width: 100%;
`

const Right = styled(Flex).attrs({
  align: 'center'
})`
  flex-grow: 1;

  ${mediaQueries.lg} {
    width: 75%;
  }

  ${mediaQueries.xl} {
    width: 80%;
  }
`

const Search = styled(Box).attrs({
  px: [null, null, 4, 6]
})`
  width: 100%;

  ${mediaQueries.lg} {
    width: 75%;
  }
`

const Relative = styled(Box)`
  position: relative;
`

const Input = styled.input`
  transition: ${theme.transition};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: #f1f5f8;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-right: 1rem;
  padding-left: 2.5rem;
  display: block;
  width: 100%;
  appearance: none;
  line-height: 1.5;

  &:focus {
    outline: 0;
    background-color: #fff;
    border-color: #dae1e7;
  }

  ::placeholder {
    color: #3d4852;
  }
`

export default () => {
  const inputRef = useRef()

  const downHandler = e => {
    if (e.keyCode === 191) {
      e.preventDefault()
      document.querySelector('input').focus()
      // inputRef.current.focus()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return (
    <Base>
      <Inner>
        <Flex align="center" mx={-4}>
          <Right>
            <Search>
              <Relative>
                <Input ref={inputRef} type="text" />
              </Relative>
            </Search>
          </Right>
        </Flex>
      </Inner>
    </Base>
  )
}
