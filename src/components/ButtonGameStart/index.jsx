import React from 'react';
import './style.css';

export const ButtonGameStart = ({ onButtonClick, disabled }) => {
  return (
    <>
      <footer>
        <div className="game-page__footer">
          <button className="btn__play-game" onClick={onButtonClick}>
            Úkol
          </button>
        </div>
      </footer>
    </>
  );
};
