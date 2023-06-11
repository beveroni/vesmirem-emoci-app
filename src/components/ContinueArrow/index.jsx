import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ContinueArrow = () => {
  return (
    <Link to="/games">
      <img
        className="button__continue--arrow"
        src="/img/arrow_green_continue.svg"
        alt="šipka pokračovat na stránku s planetkami"
      />
    </Link>
  );
};
