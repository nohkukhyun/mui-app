import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/configStore'
import { IPhotoState, photoActions } from 'features/photoSlice/photoSlice'

const PhotoPage: React.FC = () => {
  const { photoList } = useSelector((state: RootState) => state.photo)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPhoto = () => {
      dispatch({ type: photoActions.requestPhoto })
    }

    fetchPhoto()
  }, [])

  return (
    <div>
      {photoList.map((data: IPhotoState) => {
        return (
          <>
            <span key={data.id}>{data.title}</span>
            <br />
          </>
        )
      })}
    </div>
  )
}

export default PhotoPage
