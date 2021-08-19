import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import React from 'react'

export interface IPhotoState {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface IPhotoInitialState {
  photoList: IPhotoState[]
  error: AxiosError | Error | string
  loading: boolean
}

const initialState = {
  photoList: [],
  error: '',
  loading: false,
} as IPhotoInitialState

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    requestPhotoList: (state) => {
      state.loading = true
    },
    requestPhotoListSuccess: (
      state: IPhotoInitialState,
      action: PayloadAction<any>,
    ) => {
      state.loading = false
      state.photoList = action.payload
    },
    requestPhotoLustFailure: (
      state: IPhotoInitialState,
      action: PayloadAction<any>,
    ) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  requestPhotoList,
  requestPhotoListSuccess,
  requestPhotoLustFailure,
} = photoSlice.actions

export default photoSlice
