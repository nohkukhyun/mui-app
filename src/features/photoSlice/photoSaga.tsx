import { createAction, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { call, put, takeEvery, all } from 'redux-saga/effects'
import {
  IPhotoState,
  requestPhotoListSuccess,
  requestPhotoList,
  requestPhotoLustFailure,
} from './photoSlice'

export const photoAPI = async () => {
  const result = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/photos',
  }).then((res) => res.data)
  return result
}

// action todo...
// export const requestLineItemListAsync = () => {(
//   '@delivery/REQUEST_LINE_ITEM_LIST',
//   '@delivery/LINE_ITEM_LIST_SUCCESS',
//   '@delivery/LINE_ITEM_LIST_FAILURE'
// )}<undefined, IPhotoState[], AxiosError | Error>()

// export const actions = {
//   requestLineItemListAsync,
// }

export const photoSagaAction = createAction<null>('photo/photoList')

function* photoSaga(action: PayloadAction) {
  yield put(requestPhotoList())
  try {
    const res: IPhotoState[] = yield call(photoAPI)
    yield put(requestPhotoListSuccess(res))
  } catch (error) {
    yield put(requestPhotoLustFailure(error))
  }
}

function* watchPhotoSaga() {
  // yield all([takeEvery('REQUEST_PHOTO_LIST', photoSaga())])
}

export default watchPhotoSaga
