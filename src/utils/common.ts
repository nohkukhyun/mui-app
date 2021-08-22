const reminderTimeToDay = () => {
  const date = new Date()
  const aDate = new Date()
  const todayAfterTimeStamp = aDate.setDate(aDate.getDate() + 3)

  const afterDay = new Date(todayAfterTimeStamp)

  const today = `${date.getFullYear()} - ${
    date.getMonth() + 1
  } - ${date.getDate()}`

  const afterToday = `${afterDay.getFullYear()} - ${
    afterDay.getMonth() + 1
  } - ${afterDay.getDate()}
    `

  return {
    today,
    afterToday,
  }
}

const countDown = (time: number) => {
  const m = Math.floor(time / 60).toString()
  let s = (time % 60).toString()
  if (s.length === 1) s = `0${s}`
  return `${m}:${s}`
}

export { reminderTimeToDay, countDown }
