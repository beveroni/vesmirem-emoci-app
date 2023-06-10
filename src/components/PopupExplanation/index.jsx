import React from 'react';
import './style.css';
import { Cross } from '../Cross';

export const PopupExplanation = ({ children }) => {
  return (
    <div className="explanations-popup">
      <div className="explanation-contain">{children}</div>
      <Cross />
    </div>
  );
};
