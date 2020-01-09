import styled from 'styled-components'
import ds from '../designSystem'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 60px;
  font-family: 'Public Sans', sans-serif;
  color: ${ds.colors.red};
`

export const Section = styled.span`
  position: absolute;
  color: ${ds.colors.textGray};
  font-size: 14px;
  top: 3%;
  left: 3%;
`
