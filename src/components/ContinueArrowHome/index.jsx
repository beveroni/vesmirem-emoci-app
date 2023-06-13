import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ContinueArrowHome = () => {
  return (
    <Link to="/">
      <img
        className="button__arrow--home"
        src="/img/arrow_green_home.svg"
        alt="šipka pokračovat na domovskou stránku"
      />
    </Link>
  );
};
