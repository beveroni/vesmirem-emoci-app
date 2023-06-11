import React from 'react';
import './style.css';
import { Star } from '../Star';
import { planets } from '../../planet-database';

export const StarScore = () => {
  return (
    <div className="container__stars">
      {planets.map((planet) => (
        <div className="container__stars--score">
          <Star color={planet.color} key={planet.id}></Star>
        </div>
      ))}
    </div>
  );
};

// export const StarScore = () => {
//   return (
//     <div className="container__stars">
//       <img src="/img/star.svg" alt="score_star" className="star" />
//       <img src="/img/star.svg" alt="score_star" className="star" />
//       <img src="/img/star.svg" alt="score_star" className="star" />
//       <img src="/img/star.svg" alt="score_star" className="star" />
//       <img src="/img/star.svg" alt="score_star" className="star" />
//       <img src="/img/star.svg" alt="score_star" className="star" />
//       <img src="/img/star.svg" alt="score_star" className="star" />
//       <img src="/img/star.svg" alt="score_star" className="star" />
//       <img src="/img/star.svg" alt="score_star" className="star" />
//     </div>
//   );
// };
