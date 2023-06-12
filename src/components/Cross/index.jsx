import React, { useState } from 'react';

import './style.css';

export const Cross = ({ onClick }) => {
  return (
    <button className="popup__btn--close" onClick={onClick}>
      <img src="/img/cross.svg" alt="křížek" />
    </button>
  );
};
