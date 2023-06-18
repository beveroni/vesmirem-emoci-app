import React from 'react';
import './style.css';
import { planets } from '../../planet-database';

export const ConversationPlanetBubble = ({ colorText, dialog }) => {
  const planetDialog = planets.find(
    (planet) => planet.planetDialog === planetDialog,
  );
  return (
    <div
      className="conversation__planet--text bubble bubble-bottom-right"
      // @ts-ignore
      style={{ backgroundColor: colorText, '--colorText': colorText }}
    >
      <p>{dialog}</p>
    </div>
  );
};
