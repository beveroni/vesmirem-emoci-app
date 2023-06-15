import React from 'react';
import './style.css';
import { Header } from '../../components/Header';
import { planets } from '../../planet-database';
import { Link } from 'react-router-dom';
import { PopupWiner } from '../../components/PopupWiner';
import { useState, useEffect } from 'react';

export const PlanetsPage = ({ finishedGames }) => {
  const [allGamesFinished, setAllGamesFinished] = useState(false);

  useEffect(() => {
    if (finishedGames.length === planets.length) {
      setAllGamesFinished(true);
    }
  }, [finishedGames]);

  return (
    <div className="planets__page">
      <Header finishedGames={finishedGames} />
      {allGamesFinished ? (
        <PopupWiner />
      ) : (
        <>
          <div className="container__planets">
            {planets.map((planet) => (
              <div
                className={`planet__${planet.name} ${
                  finishedGames.includes(planet.name) ? 'disabled' : ''
                }`}
                key={planet.id}
              >
                <Link to={planet.name} className="link">
                  <img
                    src={planet.avatar}
                    alt="planet joy button"
                    className={`planet__${planet.name} ${
                      finishedGames.includes(planet.name) ? 'disabled' : ''
                    }`}
                  />
                  <span className="link__text">{planet.label}</span>
                </Link>
              </div>
            ))}
          </div>
          <img
            src="img/rocket.svg"
            alt="raketka"
            className="rocket__planetspage"
          />
        </>
      )}
      ;
    </div>
  );
};
