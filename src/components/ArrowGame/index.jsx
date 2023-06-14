import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ArrowHome = () => {
  return (
    <Link to="/games">
      <img
        src="/img/arrow_green_game.svg"
        className="container__arrow--game"
        alt="hint icon"
      />
    </Link>
  );
};
