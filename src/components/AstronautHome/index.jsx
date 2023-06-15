import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const AstronautHome = () => {
  return (
    <Link to="/">
      <img
        src="/public/img/astronaut.svg"
        alt="obrázek kosmonauta odkazující na domovskou stránku"
        className="astronaut_winer"
      />
    </Link>
  );
};
