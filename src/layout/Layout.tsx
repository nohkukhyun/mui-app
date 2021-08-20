import React from 'react'
import styled from 'styled-components'
import * as S from './layout.styled'

interface ILayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return <S.LayoutWrap>{children}</S.LayoutWrap>
}

export default Layout
