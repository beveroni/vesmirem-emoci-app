import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ContinueToGames = () => {
  return (
    <Link to="/games">
      <img
        src="/img/game_icon.svg"
        className="container__icon--game"
        alt="šipka pro návrat do herní plochy"
      />
    </Link>
  );
};
