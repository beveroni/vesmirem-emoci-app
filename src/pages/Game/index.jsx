import React from 'react';
import { Header } from '../../components/Header';
import './style.css';

export const Game = () => {
  return (
    <>
      <Header />
      <div className="conversation">
        <div className="conversation__rocket">
          <div className="conversation__rocket--text">
            <p>
              Ahoj plateko, no jasně, ráda Ti dopis pomůžu napsat, ať ho můžeš
              poslat po oběžné dráze.
            </p>
          </div>
          <div id="game-rocket" className="conversation__rocket--img">
            <img className="rocket-img" src="/img/rocket.svg" alt="raketka" />
          </div>
        </div>
        <div className="conversation__planet">
          <div className="conversation__planet--text bubble">
            <p>
              Ááách, ahoj, raketko, koukej, dostala jsem dopis od měsíce. Moc
              krásný. Napsal mi, že se těší, až se zase za měsíc uvidíme...
              ááách. Akorát nevím, co mu mám odpovědět. Trochu se stydím.
            </p>
          </div>
          <div id="game-planet" className="conversation__planet--img">
            <img
              className="planet-img"
              src="/img/planet_love.svg"
              alt="planetka láska"
            />
          </div>
        </div>
      </div>
      <div className="game__popup">
        <button className="game__popup--close">
          <img src="/img/cross.svg" alt="cross button" />
        </button>
        <div className="game__popup--content">
          <p>
            Tady je obsah pop-upu - jednotlivé hry Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Odio minus deserunt aspernatur quam
            dolore eius? Officia molestias iure, veritatis dolor unde illo
            voluptates ducimus aut distinctio quibusdam velit eveniet. Nulla
            porro culpa voluptates veritatis ut est praesentium. Doloribus,
            expedita?
          </p>
        </div>
      </div>
      <footer>
        <button className="btn__play-game">Úkol</button>
      </footer>
    </>
  );
};
