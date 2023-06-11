import React from 'react';
import './style.css';
import { Header } from '../../components/Header';
import { planets } from '../../planet-database';
import { Link } from 'react-router-dom';
console.log(planets);

export const PlanetsPage = ({ finishedGames }) => {
  return (
    <>
      <Header finishedGames={finishedGames} />
      <h1>Vesmírem emocí</h1>
      <div className="popup__hint">
        <button id="popup__hint--close">
          <img src="./img/cross.svg" alt="cross_button" />
        </button>
        <p>Toto je obsah popupu.</p>
      </div>
      <div className="container__planets">
        {planets.map((planet) => (
          <div
            className={`planet__${planet.name} ${
              finishedGames.includes(planet.name) ? 'disabled' : ''
            }`}
          >
            <Link to={planet.name} className="link" key={planet.id}>
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
      <img src="img/rocket.svg" alt="rocket" className="rocket" />
      <script src="scriptgamepage.js" type="module"></script>
    </>
  );
};
