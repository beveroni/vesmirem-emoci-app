import React from 'react';
import './style.css';

export const Planet = ({ planet }) => {
  return (
    <div id="game-planet" className="conversation__planet--img">
      <img className="planet-img" src={planet.avatar} alt={planet.label} />
    </div>
  );
};
