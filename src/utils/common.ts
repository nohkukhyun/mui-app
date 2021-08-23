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

const getServiceTitle = (url: string) => {
  switch (url) {
    case 'vlab1':
      return '스니커즈 관리'
    case 'vlab2':
      return '명품 관리'
    case 'vlab3':
      return '재고 관리'
    default:
      return '서비스'
  }
}

export { reminderTimeToDay, countDown, getServiceTitle }
