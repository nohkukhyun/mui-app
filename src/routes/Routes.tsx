import { Suspense, lazy } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const PhotoPage = lazy(() => import('pages/photoPage'))
const MainPage = lazy(() => import('pages/mainPage'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/photo" component={PhotoPage} />
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
