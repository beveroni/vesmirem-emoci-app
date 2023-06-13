import React from 'react';
import './style.css';
import { Star } from '../Star';
import { planets } from '../../planet-database';

export const StarScore = ({ finishedGames }) => {
  return (
    <div className="container__stars">
      {planets.map((planet) => (
        <div className="container__stars--score" key={planet.id}>
          <Star
            color={
              finishedGames?.includes(planet.name) ? planet.color : 'yellow'
            }
            key={planet.id}
          ></Star>
        </div>
      ))}
    </div>
  );
};

