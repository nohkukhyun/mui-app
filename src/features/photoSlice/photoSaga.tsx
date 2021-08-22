import { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects'
import {
  IPhotoState,
  requestPhotoListSuccess,
  requestPhotoListFailure,
  photoActions,
} from './photoSlice'
import photoSlice from './photoSlice'

export const photoAPI = async () => {
  const result = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/photos',
  }).then((res) => res.data)
  return result
}

export type PhotoAction = PayloadAction<typeof photoSlice.actions>

function* photoSaga() {
  // yield put(loadingStart())
  try {
    const photoDatas: IPhotoState[] = yield call(photoAPI)
    yield put(requestPhotoListSuccess(photoDatas))
  } catch (error) {
    yield put(requestPhotoListFailure(error))
  } finally {
    // yield put(loadingFinish())
  }
}

export function* watchPhotoSaga() {
  yield all([takeLatest(photoActions.requestPhoto, photoSaga)])
}
