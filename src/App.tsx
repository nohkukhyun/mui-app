import React, { useEffect, useState } from 'react'
import './App.css'
import Routes from 'routes/Routes'
import { Provider } from 'react-redux'
import createStore from 'store/configStore'
import { countDown, reminderTimeToDay } from 'utils/common'

const store = createStore()

function App() {
  const [nalja, setNalja] = useState<string | any>({})
  const [time, setTime] = useState<number>(59)
  const [minute, setMinute] = useState<number>(3)
  const [second, setSecond] = useState<number>(0)

  useEffect(() => {
    setNalja({
      today: reminderTimeToDay().today,
      aToday: reminderTimeToDay().afterToday,
    })
  }, [])

  useEffect(() => {
    if (time > 0) {
      const date = new Date()
      const nDate = new Date()
      const min = nDate.setMinutes(nDate.getMinutes() + 3)
      const counter = setInterval(() => {
        // const gap = Math.floor(min - date.getTime()) / 1000
        setTime((gap) => gap - 1)
      }, 1000)
      return () => clearInterval(counter)
    }

    // const count = setInterval(() => {
    //   if (second > 0) {
    //     setSecond(second - 1)
    //   }
    //   if (second === 0) {
    //     if (minute === 0) {
    //       clearInterval(count)
    //     } else {
    //       setMinute(minute - 1)
    //       setSecond(59)
    //     }
    //   }
    // }, 1000)

    // return () => clearInterval(counter)
  }, [setTime, time])

  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
        <span>
          {nalja.today} / {nalja.aToday}
        </span>
        <p>{countDown(time)}</p>
        {/* {minute}:{second === 0 ? `0${second}` : second} */}
      </div>
    </Provider>
  )
}

export default App
