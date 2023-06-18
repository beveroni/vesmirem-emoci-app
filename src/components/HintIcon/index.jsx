import React, { useRef } from 'react';
import './style.css';
import { PopupExplanationRules } from '../PopupExplanationRules';

export const HintIcon = () => {
  const hintDialogRef = useRef(null);

  const openPopupHint = () => {
    hintDialogRef.current.showModal();
  };

  const closePopupHint = () => {
    hintDialogRef.current.close();
  };

  return (
    <div>
      <img
        src="/img/hint_icon.svg"
        className="container__icon--hint"
        alt="home icon"
        onClick={openPopupHint}
      />
      <PopupExplanationRules
        dialogRef={hintDialogRef}
        onClose={closePopupHint}
      />
    </div>
  );
};
