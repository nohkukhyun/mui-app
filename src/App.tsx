import Routes from 'routes/Routes'
import { Provider } from 'react-redux'
import createStore from 'store/configStore'
import { StylesProvider } from '@material-ui/core/styles'

const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <Routes />
      </StylesProvider>
    </Provider>
  )
}

export default App
