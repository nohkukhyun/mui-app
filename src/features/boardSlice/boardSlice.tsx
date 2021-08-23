import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const name = 'board'

export interface IBoardSearchState {
  sneakersName: string
  sneakersId: number
  sneakersStatus: string
}

const initialState = {
  sneakersName: '',
  sneakersId: 0,
  sneakersStatus: '',
} as IBoardSearchState

export const reducers = {
  setSneakersName: (state: IBoardSearchState, action: PayloadAction<any>) => {
    state.sneakersName = action.payload
  },
  setSneakersId: (state: IBoardSearchState, action: PayloadAction<any>) => {
    state.sneakersId = action.payload
  },
  setSneakersStatus: (state: IBoardSearchState, action: PayloadAction<any>) => {
    state.sneakersStatus = action.payload
  },
}

const boardSlice = createSlice({
  name,
  initialState,
  reducers,
})

export const { setSneakersName, setSneakersId, setSneakersStatus } =
  boardSlice.actions

export default boardSlice
