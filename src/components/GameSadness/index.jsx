import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export const GameSadness = ({ onFinish }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [gameFinished, setGameFinished] = useState(false);

  const startStopwatch = (e) => {
    e.preventDefault();

    if (inputValue.length === 0) {
      return;
    }

    const parsedValue = Number(inputValue);

    if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 60) {
      setInputValue('');
      return;
    }

    setTime(parsedValue);
    setIsRunning(true);
  };

  const decrementTime = () => {
    setTime((prevTime) => {
      if (prevTime === 1) {
        setInputValue('');
      }
      return prevTime - 1;
    });
  };

  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(decrementTime, 1000);
    } else if (isRunning && time === 0) {
      setGameFinished(true);
      setTimeout(onFinish, 6000);
    } else if (time <= 0) {
      clearInterval(interval);
      setIsRunning(false);
      setInputValue('');
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="popup__game--sadness">
      <form className="controls" onSubmit={startStopwatch}>
        <div className="controls__top">
          <div className="controls__input--group">
            <p>Zadej počet sekund: </p>
            <label>
              <input
                type="text"
                className="time-input"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="maximálně 60"
                // title="Zadej maximálně 5 sekund"
              />
              {/* &nbsp;sekund */}
            </label>
            <button
              type="submit"
              className="btn-stopwatsch"
              disabled={inputValue.length === 0}
            >
              Start
            </button>
          </div>
        </div>
      </form>
      <div className="stopwatch">
        <div className="stopwatch__minutes"></div>
        <div className="stopwatch__seconds">{time}</div>
      </div>
      <img
        src="/img/comet.svg"
        id="comet"
        className={gameFinished ? 'comet-animation' : 'comet'}
        alt="obrázek letící komety"
      />
    </div>
  );
};
