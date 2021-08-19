import { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
  IPhotoState,
  requestPhotoListSuccess,
  requestPhotoList,
  requestPhotoLustFailure,
} from './photoSlice'

export const photoAPI = async () => {
  const result = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/',
  })
  return result
}

function* photoSaga() {
  yield put(requestPhotoList())
  try {
    const res: IPhotoState[] = yield call(photoAPI)
    yield put(requestPhotoListSuccess(res))
  } catch (error) {
    yield put(requestPhotoLustFailure(error))
  }
}

export default photoSaga
