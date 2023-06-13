import React from 'react';
import './style.css';

export const PopupWinerExplanation = ({ children, allGamesFinished }) => {
  return (
    <div className="explanations__popup__winer">
      <div className="explanations__popup__winer--contain">{children}</div>
    </div>
  );
};
