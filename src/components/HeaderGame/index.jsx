import React from 'react';
import './style.css';
import { StarScore } from '../StarsScore';
import { HintIcon } from '../HintIcon';
import { HomeIcon } from '../HomeIcon';
import { ArrowHome } from '../ArrowGame';

export const HeaderGame = ({ finishedGames }) => {
  return (
    <header>
      <div className="header__game__container">
        <div className="header__game__container--icons">
          <HomeIcon />
          <HintIcon />
          <ArrowHome />
        </div>
        <StarScore finishedGames={finishedGames} />
      </div>
    </header>
  );
};
