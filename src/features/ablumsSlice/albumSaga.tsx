import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { albumsActions, albumSaga, selectAlbumSaga } from './albumSlice'

// const fetchAlbums = async () => {
//   const albums: IAlbumListState[] = await axios({
//     method: 'get',
//     url: 'https://jsonplaceholder.typicode.com/albums',
//   }).then((res) => res.data)

//   return albums
// }

// function* albumSaga() {
//   try {
//     const albumDatas: IAlbumListState[] = yield call(fetchAlbums)
//     yield put(requestAlbumSuccess(albumDatas))
//   } catch (error) {
//     yield put(requestAlbumFailure(error))
//   }
// }

export default function* watchAlbumSaga() {
  yield all([
    takeEvery(albumsActions.requestAlbum, albumSaga),
    takeEvery(albumsActions.requestAlbumSelect, selectAlbumSaga),
  ])
}
