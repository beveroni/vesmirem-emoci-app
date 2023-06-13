import React from 'react';
import './style.css';
import { PopupWinerExplanation } from '../PopupWinerExplanation';
import { ContinueArrowHome } from '../ContinueArrowHome';

export const PopupWiner = ({ allGamesFinished }) => {
  return (
    <div className="popup-winer">
      <PopupWinerExplanation allGamesFinished={allGamesFinished}>
        <p>
          <strong>Gratulujeme!</strong>
        </p>
        <p>Objevil si všechny planetky.</p>
        <ContinueArrowHome />
      </PopupWinerExplanation>
    </div>
  );
};
