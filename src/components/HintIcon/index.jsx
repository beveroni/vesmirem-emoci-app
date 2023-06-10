import React from 'react';
import './style.css';
import { PopupExplanationRules } from '../PopupExplanationRules';
import { useState } from 'react';

export const HintIcon = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleHintClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div>
      <img
        src="/img/hint_icon.svg"
        className="container__icon--hint"
        alt="home icon"
        onClick={handleHintClick}
      />
      {isPopupOpen && <PopupExplanationRules />}
    </div>
  );
};
