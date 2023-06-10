import React from 'react';
import './style.css';
import { useState } from 'react';

export const Planet = ({ planet, onClick }) => {
  return (
    <div
      id="game-planet"
      className="conversation__planet--img"
      onClick={onClick}
    >
      <img className="planet-img" src={planet.avatar} alt={planet.label} />
    </div>
  );
};
