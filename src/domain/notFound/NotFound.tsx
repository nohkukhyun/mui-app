import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <SNotFoundWrap>
      <SCenterWrap>
        <SErrorMessage>Not Found Page!</SErrorMessage>
      </SCenterWrap>
    </SNotFoundWrap>
  )
}

export default NotFound

const SNotFoundWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  position: relative;
  height: calc(100vh - 200px);
`

const SCenterWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const SErrorMessage = styled.span`
  font-size: 3em;
  color: red;
  font-weight: bold;
`
