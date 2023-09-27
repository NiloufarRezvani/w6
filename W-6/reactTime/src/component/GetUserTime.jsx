import React, { useState, useEffect } from 'react'


function GetUserTime() {
  const [timer, setTimer] = useState("00:00:00");
  const [inputNumber, setInputNumber] = useState('');
  const updateTimer = () => {
    const validInput = inputNumber.slice(0, 6).padStart(6, '0');
    const hours = validInput.slice(0, 2);
    const minutes = validInput.slice(2, 4);
    const seconds = validInput.slice(4, 6);


    setTimer(`${hours}:${minutes}:${seconds}`);
  };
  useEffect(() => {
    updateTimer();
  }, [inputNumber]);

  const handleNumberClick = (number) => {
    if (inputNumber.length < 6) {
      setInputNumber(inputNumber + number);
    }
  };
  const clearInput = () => {
    setInputNumber('');
  };

  return (
    <div className="main">
      <h1>Countdown Timer</h1>
      <div className="timer-display">{timer}</div>
      <div className='every'>

        <div className="keypad">
          {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number) => (
            <button key={number} onClick={() => handleNumberClick(String(number))}>
              {number}
            </button>
          ))}
        </div>
        <div className="buttons">
          <button onClick={clearInput}>Clear</button>
          <button > Set</button>
        </div>

      </div>

    </div>
  );
}


export default GetUserTime



