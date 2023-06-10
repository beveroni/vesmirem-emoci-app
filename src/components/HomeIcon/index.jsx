import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const HomeIcon = () => {
  return (
    <Link to="/">
      <img
        src="./img/home_icon.svg"
        className="container__icon--home"
        alt="hint icon"
      />
    </Link>
  );
};
