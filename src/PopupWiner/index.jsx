import React from 'react';
import './style.css';
import { PopupExplanation } from '../components/PopupExplanation';

const PopupWiner = ({ onClose }) => {
  return (
    <div className="popup-winer">
      <PopupExplanation onClose={onClose}>Winer Page</PopupExplanation>
    </div>
  );
};
