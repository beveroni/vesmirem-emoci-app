import React from 'react';
import './style.css';
import { planets } from '../../planet-database';
import { useState, useEffect } from 'react';

export const ConversationPlanetBubble = ({ color, dialog }) => {
  const planetDialog = planets.find(
    (planet) => planet.planetDialog === planetDialog,
  );
  return (
    <div
      className="conversation__planet--text bubble bubble-bottom-right"
      // @ts-ignore
      style={{ backgroundColor: color, '--color': color }}
    >
      <p>{dialog}</p>
    </div>
  );
};
