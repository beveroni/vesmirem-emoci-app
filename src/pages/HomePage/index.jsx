import React from 'react';
import './style.css';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { PopupExplanationAbout } from '../../components/PopupExplanationAbout';

export const HomePage = () => {
  return (
    <div className="page-container">
      <main>
        <h1>Vesmírem emocí</h1>
        <img className="rocket" src="/img/rocket.svg" alt="rocket" />
        <Link to="games">
          <img
            className="button__game"
            src="./img/button_game_main.svg"
            alt="tlačítko hrát"
          />
        </Link>
        <button className="button__project" id="popup__open--about">
          O projektu
        </button>
        <button className="button__emotions" id="popup__open--emotions">
          Seznam emocí
        </button>
        <button className="button__rules" id="popup__open--rules">
          Pravidla
        </button>
        <PopupExplanationAbout />
      </main>
      <Footer />
    </div>
  );
};
