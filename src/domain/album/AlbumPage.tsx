import { albumsActions, IAlbumListState } from 'features/ablumsSlice/albumSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/configStore'

const AlbumPage = () => {
  const [show, setShow] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { albumsList, selectAlbum } = useSelector(
    (state: RootState) => state.album,
  )

  const handleFetch = () => {
    dispatch({ type: albumsActions.requestAlbum })
    setShow(false)
  }

  const handleSelect = (id: number) => {
    setShow(true)
    dispatch({ type: albumsActions.requestAlbumSelect, payload: id })
  }

  return (
    <div>
      <button onClick={handleFetch}>click fetch!</button>
      {!show ? (
        <ul>
          {albumsList?.map((data: IAlbumListState) => {
            return (
              <li key={data.id} onClick={() => handleSelect(data.id)}>
                {data.title}
              </li>
            )
          })}
        </ul>
      ) : (
        <div>
          {selectAlbum &&
            Object.keys(selectAlbum).map((data, idx) => {
              return <p key={idx}>{`${data} : ${selectAlbum[data]}`}</p>
            })}
        </div>
      )}
    </div>
  )
}

export default AlbumPage
