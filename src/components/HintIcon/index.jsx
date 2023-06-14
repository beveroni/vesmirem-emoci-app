import React, { useRef } from 'react';
import './style.css';
import { PopupExplanationRules } from '../PopupExplanationRules';
// import { useState } from 'react';

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

//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleHintClick = () => {
//     setIsPopupOpen(true);
//   };

//   const handleHintClickClose = () => {
//     setIsPopupOpen(false);
//   };

//   return (
//     <div>
//       <img
//         src="/img/hint_icon.svg"
//         className="container__icon--hint"
//         alt="home icon"
//         onClick={handleHintClick}
//       />
//       {isPopupOpen && <PopupExplanationRules onClose={handleHintClickClose} />}
//     </div>
//   );
// };
