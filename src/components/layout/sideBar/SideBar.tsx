import React from 'react'
import { MenuList, MenuItem, Grid, Paper, Typography } from '@material-ui/core'
import { useHistory } from 'react-router'
import { menuDatas } from './menudata'

interface IMenuDatas {
  id: number
  title: string
  url?: string
}

interface ISideBarProps {
  serviceTitle?: string
}

const SideBar = ({ serviceTitle }: ISideBarProps) => {
  const history = useHistory()
  const goLink = (link?: string | any) => {
    history.push(link)
  }

  return (
    <Grid sm={2}>
      <Paper variant="outlined">
        <MenuList>
          {menuDatas.map((menuItem: IMenuDatas) => {
            return (
              <MenuItem key={menuItem.id} onClick={() => goLink(menuItem.url)}>
                <Typography
                  variant="subtitle1"
                  style={{
                    color:
                      serviceTitle === menuItem.title ? '#3DB2FF' : '#171717',
                  }}
                >
                  {menuItem.title}
                </Typography>
              </MenuItem>
            )
          })}
        </MenuList>
      </Paper>
    </Grid>
  )
}

export default SideBar
