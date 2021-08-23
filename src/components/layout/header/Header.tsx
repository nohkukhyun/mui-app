import styled from 'styled-components'
import React from 'react'

const Header = () => {
  return <SHeaderWrap></SHeaderWrap>
}

export default Header

const SHeaderWrap = styled.header`
  min-height: 30px;
  width: 100%;
  padding: 10px 0;
  border: 1px solid #c4c4c4;
  text-align: center;
  &:after {
    content: 'Fake Header';
  }
`
