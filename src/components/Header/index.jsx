import React from 'react';
import './style.css';
import { StarScore } from '../StarsScore';
import { HintIcon } from '../HintIcon';
import { HomeIcon } from '../HomeIcon';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="container__icons">
          <HomeIcon />
          <HintIcon />
        </div>
        <StarScore />
      </div>
    </header>
  );
};