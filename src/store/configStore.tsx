import { combineReducers } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import rootSaga from './rootSaga'
import photoSlice from 'features/photoSlice/photoSlice'

const sagaMiddleWare = createSagaMiddleware()
const reducers = combineReducers({
  photo: photoSlice.reducer,
})

const createStore = () => {
  const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleWare],
  })
  sagaMiddleWare.run(rootSaga)

  return store
}

export type RootState = ReturnType<typeof reducers>

export default createStore
