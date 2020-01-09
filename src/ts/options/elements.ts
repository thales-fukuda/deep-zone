import styled from 'styled-components'
import ds from '../designSystem'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Public Sans', sans-serif;
`

export const BlackListLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  align-self: center;
  width: 100%;
`

export const LabelText = styled.span`
  margin-top: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid ${ds.colors.black};
`

export const BlackListInput = styled.input`
  padding: 10px 0;
  background: transparent;
  border: none;
  outline-width: 0;
  font-size: 32px;
  font-family: 'Public Sans', sans-serif;
  width: 100%;
`

export const InputLeft = styled.span`
  padding: 10px 4px 10px 0;
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: ${ds.colors.red};
`

export const BlackList = styled.ul`
  height: 50%;
  padding: 0;
  margin: 0;
  margin-top: 50px;
  list-style: none;
  align-self: left;
`

export const BlackListElement = styled.li`
  position: relative;
  margin-bottom: 25px;
  font-weight: bold;
  color: ${ds.colors.red};
  font-size: 32px;
`

export const CloseIcon = styled.i`
  position: absolute;
  left: -5%;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Section = styled.span`
  position: absolute;
  color: ${ds.colors.textGray};
  font-size: 14px;
  top: 3%;
  left: 3%;
`
