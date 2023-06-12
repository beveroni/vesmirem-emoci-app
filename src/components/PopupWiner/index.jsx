import React from 'react';
import './style.css';
import { PopupExplanation } from '../PopupExplanation';

export const PopupWiner = ({ onClose }) => {
  return (
    <div className="popup-winer">
      <PopupExplanation onClose={onClose}>
        <p>
          <strong>Gratulujeme!</strong>
        </p>
        <p>Objevil si všechny planetky.</p>
      </PopupExplanation>
    </div>
  );
};
