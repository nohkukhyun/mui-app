import React from 'react'
import './App.css'
import Routes from 'routes/Routes'
import { Provider } from 'react-redux'
import createStore from 'store/configStore'

const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  )
}

export default App
