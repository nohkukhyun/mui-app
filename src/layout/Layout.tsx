import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as S from './layout.styled'
import Header from 'components/layout/header/Header'
import SideBar from 'components/layout/sideBar/SideBar'
import { Grid, Paper, Typography, Divider } from '@material-ui/core'
import { useLocation } from 'react-router'
import { getServiceTitle } from 'utils/common'

interface ILayoutProps {
  children?: React.ReactNode | any
}

const Layout = ({ children }: ILayoutProps) => {
  const location = useLocation()
  const [serviceTitle, setServiceTitle] = useState<string>('')

  useEffect(() => {
    const pathName = location?.pathname.replaceAll('/', '')
    setServiceTitle(pathName)
  }, [location])

  const TypoComponent = React.forwardRef(() => {
    return (
      <Typography variant="h5" gutterBottom>
        {getServiceTitle(serviceTitle)}
      </Typography>
    )
  })

  return (
    <S.LayoutWrap>
      <Header />
      <SContainer>
        <SideBar serviceTitle={getServiceTitle(serviceTitle)} />
        <Grid sm={10}>
          <SPaper elevation={3} variant="outlined">
            <TypoComponent />
            <Divider />
            {children}
          </SPaper>
        </Grid>
      </SContainer>
    </S.LayoutWrap>
  )
}

export default Layout

const SContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
`

const SPaper = styled(Paper)`
  padding: 10px;
`
