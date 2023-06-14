import React from 'react';
import './style.css';
import { Cross } from '../Cross';

export const PopupExplanation = ({
  children,
  onClose,
  dialogRef,
  // allGamesFinished,
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

// export const PopupExplanation = ({ children, onClose, allGamesFinished}) => {
//   return (
//     <div className="explanations-popup">
//       <div className="explanation-contain">{children}</div>
//       <Cross onClick={onClose} />
//     </div>
//   );
// };
