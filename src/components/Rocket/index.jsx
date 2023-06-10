import React from 'react';
import './style.css';

export const Rocket = ({ onClick }) => {
  return (
    <div
      id="game-rocket"
      className="conversation__rocket--img"
      onClick={onClick}
    >
      <img className="rocket-img" src="/img/rocket.svg" alt="raketka" />
    </div>
  );
};
