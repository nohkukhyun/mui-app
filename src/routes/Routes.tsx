import Layout from 'layout/Layout'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

// code splitting
const MainPage = lazy(() => import('domain/main'))
const PhotoPage = lazy(() => import('domain/photo'))
const AlbumPage = lazy(() => import('domain/album'))
const NotFound = lazy(() => import('domain/notFound/NotFound'))
const VerticalOne = lazy(() => import('domain/verticalOne'))
const VerticalTwo = lazy(() => import('domain/verticalTwo'))
const VerticalThree = lazy(() => import('domain/verticalThree'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/photo" component={PhotoPage} />
            <Route exact path="/album" component={AlbumPage} />
            <Route exact path="/vlab1" component={VerticalOne} />
            <Route exact path="/vlab2" component={VerticalTwo} />
            <Route exact path="/vlab3" component={VerticalThree} />
            <Route exact path="/NotFound" component={NotFound} />
            <Redirect to={'/NotFound'} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
