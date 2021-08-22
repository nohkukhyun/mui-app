import { all } from 'redux-saga/effects'
import { watchPhotoSaga } from 'features/photoSlice/photoSaga'
import watchAlbumSaga from 'features/ablumsSlice/albumSaga'

/**
 * 모든 saga를 등록해준다.
 */
function* rootSaga() {
  yield all([watchPhotoSaga(), watchAlbumSaga()])
}

export default rootSaga
