import styled from 'styled-components'

import ds from '../designSystem'

export const PopupContainer = styled.div`
  width: 250px;
  height: 180px;
  background-color: ${ds.colors.backgroundGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Button = styled.button<ButtonProps>`
  width: 170px;
  height: 52px;
  background-color: ${props => (props.red ? ds.colors.red : ds.colors.yellow)};
  color: ${ds.colors.black};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  font-family: 'Public Sans', sans-serif;
  cursor: pointer;
  outline-width: 0px;
  &:active {
    box-shadow: none;
  }
`

export const Title = styled.h1`
  font-size: 16px;
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  color: ${ds.colors.textGray};
  position: absolute;
  bottom: 30px;
`

interface ButtonProps {
  red?: boolean
}
