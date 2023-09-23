import React from 'react'

function Timer() {
    const total = Date.parse(e) - Date.parse(new Date())
    const hour = Math.floor((total /1000 * 60 * 60) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { total, hour, minutes, seconds}
  return (
    <div>Timer</div>
  )
}

export default Timer