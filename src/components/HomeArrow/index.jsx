import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const HomeArrow = () => {
  return (
    <Link to="/">
      <img
        className="button__continue--home"
        src="/img/arrow_green_continue.svg"
        alt="šipka pokrašovat na domovskou stránku"
      />
    </Link>
  );
};
