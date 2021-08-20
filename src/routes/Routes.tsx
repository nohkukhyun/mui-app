import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const PhotoPage = lazy(() => import('domain/photoPage'))
const MainPage = lazy(() => import('domain/mainPage'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/photo" component={PhotoPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
