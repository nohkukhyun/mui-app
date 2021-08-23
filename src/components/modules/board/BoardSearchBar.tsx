import { TextField } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import boardSlice from 'features/boardSlice/boardSlice'

const BoardSearchBar = () => {
  const dispatch = useDispatch()
  const { actions } = boardSlice

  const setHandleSneakersInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string,
  ) => {
    if (type === 'name') dispatch(actions.setSneakersName(e.target.value))
    else if (type === 'id') dispatch(actions.setSneakersId(e.target.value))
    else if (type === 'status')
      dispatch(actions.setSneakersStatus(e.target.value))
  }

  return (
    <SBoardSearchBar>
      <TextField
        id="standard-basic"
        label="상품명"
        onChange={(e) => setHandleSneakersInput(e, 'name')}
      />
      <TextField
        id="standard-basic"
        label="상품번호"
        onChange={(e) => setHandleSneakersInput(e, 'id')}
      />
      <TextField
        id="standard-basic"
        label="상품상태"
        onChange={(e) => setHandleSneakersInput(e, 'status')}
      />
    </SBoardSearchBar>
  )
}

export default BoardSearchBar

const SBoardSearchBar = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  gap: 10px;
`
