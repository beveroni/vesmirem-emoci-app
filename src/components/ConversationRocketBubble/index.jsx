import React from 'react';
import './style.css';
import { planets } from '../../planet-database';

export const ConversationRocketBubble = ({ dialogrocket }) => {
  
  const rocketDialog = planets.find(
    (planet) => planet.rocketDialog === rocketDialog,
  );
  return (
    <div className="conversation__rocket--text bubble bubble-bottom-left">
      <p>{dialogrocket}</p>
    </div>
  );
};
