import { useState, useEffect } from 'react'

interface ICreatePromiseSaga {
  request?: string
  success?: string
  failure?: string
}

const useCreateAsyncSaga = (request = '', success = '', failure = '') => {
  const [asyncSaga, createAsyncSaga] = useState<ICreatePromiseSaga>({
    request,
    success,
    failure,
  })

  return {
    asyncSaga,
    createAsyncSaga,
  }
}

export default useCreateAsyncSaga
