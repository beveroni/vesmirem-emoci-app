import React from 'react';
import './style.css';
import { Cross } from '../Cross';

export const PopupExplanation = ({
  children,
  onClose,
  dialogRef,
  }) => {
  return (
    <div>
      <dialog className="explanations-popup" ref={dialogRef}>
        <div className="explanation-contain">{children}</div>
        <Cross onClick={onClose} />
      </dialog>
    </div>
  );
};

