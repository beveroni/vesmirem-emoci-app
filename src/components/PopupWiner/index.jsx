import React from 'react';
import './style.css';
import { PopupExplanation } from '../PopupExplanation';

export const PopupWiner = ({ onClose, allGamesFinished }) => {
  return (
    <div className="popup-winer">
      <PopupExplanation onClose={onClose} allGamesFinished={allGamesFinished}>
        <p>
          <strong>Gratulujeme!</strong>
        </p>
        <p>Objevil si všechny planetky.</p>
      </PopupExplanation>
    </div>
  );
};
