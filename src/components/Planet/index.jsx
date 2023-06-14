import React from 'react';
import './style.css';

export const Planet = ({ planet }) => {
  return (
    <>
      <img className="planet-img" src={planet.avatar} alt={planet.label} />
    </>
  );
};
