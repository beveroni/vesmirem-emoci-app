import React from 'react';
import './style.css';
import { StarScore } from '../StarsScore';
import { HintIcon } from '../HintIcon';
import { HomeIcon } from '../HomeIcon';

export const Header = ({ finishedGames }) => {
  return (
    <header>
      <div className="header__container">
        <div className="header__container--icons">
          <HomeIcon />
          <HintIcon />
        </div>
        <StarScore finishedGames={finishedGames} />
      </div>
    </header>
  );
};
