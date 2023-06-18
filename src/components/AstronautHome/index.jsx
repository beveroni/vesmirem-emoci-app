import React from 'react';
import './style.css';

export const AstronautHome = () => {
  const refreshApp = () => {
    window.location.href = '/';
  };

  return (
    <img
      src="/img/astronaut.svg"
      alt="obrázek kosmonauta odkazující na domovskou stránku"
      className="astronaut_winer"
      onClick={refreshApp}
    />
  );
};
