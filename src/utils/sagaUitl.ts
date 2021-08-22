import { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'

const createAsyncSaga = (
  type: any,
  promiseCallback: any,
  isLoading: boolean,
) => {
  return function* (action?: any) {
    //if(isLoading) yield put(loadingStart())

    try {
      const datas: AxiosResponse<any[] | any> = yield call(
        promiseCallback,
        action.payload && action.payload,
      )
      yield put(type[0](datas))
    } catch (error) {
      yield put(type[1](error))
    }

    //if(isLoading) yield put(loadingFinish())
  }
}

export { createAsyncSaga }
