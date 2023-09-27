import React from 'react'
import { formatToSeconds, millisecondsToArray } from './timeConvertor';

function Timer() {
    const total = Date.parse(e) - Date.parse(new Date())
    const hour = Math.floor((total /1000 * 60 * 60) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { total, hour, minutes, seconds}
    function startTimer(e) {
        let { total, hour, minutes, seconds} = getTimeRemaining(e);
        if (total >= 0) {
          setTimer(
            (hour >9 ? hour : '0'+hour) + ':' +
            (minutes >9 ? minutes : '0'+ minutes)+ ':' +
            (seconds >9 ? seconds : '0'+ seconds)
          )
         }
}
}

export default Timer