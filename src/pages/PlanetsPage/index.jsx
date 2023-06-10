import React from 'react';
import './style.css';
import { Header } from '../../components/Header';
import { planets } from '../../planet-database.js';
import { Link } from 'react-router-dom';
console.log(planets);

export const PlanetsPage = () => {
  return (
    <>
      <Header />
      <div className="popup__hint">
        <button id="popup__hint--close">
          <img src="./img/cross.svg" alt="cross_button" />
        </button>
        <p>Toto je obsah popupu.</p>
      </div>
      <h1>Vesmírem emocí</h1>
      <div className="container__planets">
        {planets.map((planet) => (
          <Link to={planet.name} className="link" key={planet.id}>
            <img
              src={planet.avatar}
              alt="planet joy button"
              className={'planet__' + planet.name}
            />
            <span className="link__text">{planet.label}</span>
          </Link>
        ))}
      </div>
      <img src="img/rocket.svg" alt="rocket" className="rocket" />
      <script src="scriptgamepage.js" type="module"></script>
    </>
  );
};