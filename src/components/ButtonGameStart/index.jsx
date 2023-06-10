import React from 'react';
import './style.css';

export const ButtonGameStart = ({ onButtonClick }) => {
  return (
    <>
      <footer>
        <button className="btn__play-game" onClick={onButtonClick}>
          Úkol
        </button>
      </footer>
    </>
  );
};
