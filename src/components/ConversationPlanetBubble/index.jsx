import React from 'react';
import './style.css';
import { planets } from '../../planet-database';

export const ConversationPlanetBubble = ({ dialog }) => {
  const planetDialog = planets.find(
    (planet) => planet.planetDialog === planetDialog,
  );
  return (
    <div className="conversation__planet--text bubble bubble-bottom-right">
      <p>{dialog}</p>
    </div>
  );
};
