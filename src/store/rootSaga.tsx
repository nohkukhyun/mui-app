import { all } from 'redux-saga/effects'
import photoSaga from 'features/photoSlice/photoSaga'

function* rootSaga() {
  yield all([photoSaga()])
}

export default rootSaga
