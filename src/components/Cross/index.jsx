import React, { useState } from 'react';

import './style.css';

export const Cross = ({ onClick }) => {
  // const [isOpen, setIsOpen] = useState(true);

  // const handleClose = () => {

  //   setIsOpen(false);
  // };

  // if (!isOpen) {
  //   return null;
  // }

  //   return (
  //     <button className="popup__btn--close" onClick={handleClose}>
  //       <img src="/img/cross.svg" alt="křížek" />
  //     </button>
  //   );
  // };

  return (
    <button className="popup__btn--close" onClick={onClick}>
      <img src="/img/cross.svg" alt="křížek" />
    </button>
  );
};
