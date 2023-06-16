import React from 'react';
import './style.css';
import { planets } from '../../planet-database';

export const RocketBubbleInfo = () => {
  return (
    <div className="planetspage__rocket--text bubbleInfo bubbleInfo-bottom-left">
      <p>Vyber si planetku, která se ti líbí </p>
    </div>
  );
};

// export const RocketBubbleInfo = ({ dialogrocket }) => {
//   const rocketDialog = planets.find(
//     (planet) => planet.rocketDialog === rocketDialog,
//   );
//   return (
//     <div className="planetspage__rocket--text bubble bubble-bottom-left">
//       <p>{dialogrocket}</p>
//     </div>
//   );
// };
