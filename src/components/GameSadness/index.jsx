import React from 'react';
import './style.css';

export const GameSadness = () => {
  return (
    <div className="popup__game">
      <form className="controls">
        <div className="controls__top">
          <div className="controls__input--group">
            <button type="submit">Start</button>
            <label>
              <input
                type="text"
                className="time-input"
                title="Zadej maximálně 5 sekund"
              />
              sekund
            </label>
          </div>
        </div>
      </form>
      <div className="stopwatch">
        <div className="stopwatch__minutes"></div>
        <div className="stopwatch__seconds">00</div>
      </div>
      <img
        src="/img/comet.svg"
        id="comet"
        className="comet"
        alt="obrázek letící komety"
      />
    </div>
  );
};
