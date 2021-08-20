import { all } from 'redux-saga/effects'
import photoSaga from 'features/photoSlice/photoSaga'

/**
 * 모든 saga를 등록해준다.
 */
function* rootSaga() {
  yield all([photoSaga()])
}

export default rootSaga
