import styled from 'styled-components'
import { hexa } from '@hackclub/design-system'

export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  position: relative;
  grid-area: search;
  @media (max-width: 968px) {
    padding-top: 8px;
  }
`

export const SearchInput = styled.input`
  font-family: inherit;
  border: 0px none;
  outline: currentcolor none 0px;
  -moz-appearance: none;
  border-radius: 4px !important;
  background: ${props =>
    props.shadow ? props.theme.colors.snow : props.theme.colors.white};
  color: ${({ theme }) => theme.colors.slate};
  padding: 12px 16px;
  width: 100%;
  box-shadow: ${props =>
    props.shadow ? 'none' : '0 2px 4px rgba(0,0,0,0.04)'};
  transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  ::-webkit-input-placeholder {
    text-align: center;
  }

  ::-webkit-input-placeholder {
    text-align: center;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }

  :-ms-input-placeholder {
    text-align: center;
  }
  &:hover {
    box-shadow: ${props =>
      props.shadow ? 'none' : '0 4px 12px rgba(0,0,0,0.1)'};
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  &:focus {
    border-radius: 4px !important;
    box-shadow: ${props =>
      props.shadow ? 'none' : '0 4px 12px rgba(0,0,0,0.1)'};
    background: ${props =>
      props.shadow ? props.theme.colors.smoke : props.theme.colors.white};
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  &:active {
    border-radius: 4px !important;
  }
`

export const Hits = styled.div`
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all 0.2s ease-in-out 0s;
  border-radius: 4px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  height: auto;
  max-height: 400px;
  overflow-y: scroll;
  max-width: 100%;
`

export const SearchProductContainer = styled.section`
  padding: 12px;
  border-bottom: 1px solid ${props => hexa(props.theme.colors.snow, 0.4)};
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.colors.snow};
  }
`

export const Image = styled.img`
  border-radius: 4px;
  width: 40px;
  height: 40px;
  min-width: 40px;
  max-width: 40px;
`
