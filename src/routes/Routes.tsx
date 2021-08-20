import Layout from 'layout/Layout'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// code splitting
const PhotoPage = lazy(() => import('domain/photo'))
const MainPage = lazy(() => import('domain/main'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/photo" component={PhotoPage} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
