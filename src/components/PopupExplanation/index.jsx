import React from 'react';
import './style.css';
import { Cross } from '../Cross';

export const PopupExplanation = ({ children, onClose }) => {
  return (
    <div className="explanations-popup">
      <div className="explanation-contain">{children}</div>
      <Cross onClick={onClose} />
    </div>
  );
};
