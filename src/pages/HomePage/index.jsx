import React from 'react';
import './style.css';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { PopupExplanationAbout } from '../../components/PopupExplanationAbout';
import { PopupExplanationEmotions } from '../../components/PopupExplanationEmotions';
import { PopupExplanationRules } from '../../components/PopupExplanationRules';
import { PopulExplanationTips } from '../../components/PopupExplanationTips';
import { useState } from 'react';

export const HomePage = () => {
  const [showPopupAbout, setShowPopupAbout] = useState(false);
  const [showPopupEmotions, setShowPopupEmotions] = useState(false);
  const [showPopupRules, setShowPopupRules] = useState(false);
  const [showPopupTips, setShowPopupTips] = useState(false);

  console.log(showPopupRules);

  const handlePopupAboutOpen = () => {
    setShowPopupAbout(true);
  };

  const handlePopupAboutClose = () => {
    setShowPopupAbout(false);
  };

  const handlePopupEmotionsOpen = () => {
    setShowPopupEmotions(true);
  };

  const handlePopupEmotionsClose = () => {
    setShowPopupEmotions(false);
  };

  const handlePopupRulesOpen = () => {
    setShowPopupRules(true);
  };

  const handlePopupRulesClose = () => {
    setShowPopupRules(false);
  };

  const handlePopupTipsOpen = () => {
    setShowPopupTips(true);
  };

  const handlePopupTipsClose = () => {
    setShowPopupTips(false);
  };

  return (
    <div className="page-container">
      <main>
        <h1>Vesmírem emocí</h1>
        <img className="rocket" src="/img/rocket.svg" alt="raketka" />
        <Link to="games">
          <img
            className="button__game"
            src="./img/button_game_main.svg"
            alt="tlačítko hrát"
          />
        </Link>
        <button
          className="button__project"
          id="popup__open--about"
          onClick={handlePopupAboutOpen}
        >
          O projektu
        </button>
        <button
          className="button__emotions"
          id="popup__open--emotions"
          onClick={handlePopupEmotionsOpen}
        >
          Seznam emocí
        </button>
        <button
          className="button__rules"
          id="popup__open--rules"
          onClick={handlePopupRulesOpen}
        >
          Pravidla
        </button>
        <button
          className="button__tips"
          id="popup__open--tips"
          onClick={handlePopupTipsOpen}
        >
          Další tipy
        </button>
        {showPopupAbout && (
          <PopupExplanationAbout onClose={handlePopupAboutClose} />
        )}
        {showPopupEmotions && (
          <PopupExplanationEmotions onClose={handlePopupEmotionsClose} />
        )}
        {showPopupRules && (
          <PopupExplanationRules onClose={handlePopupRulesClose} />
        )}
        {showPopupTips && (
          <PopulExplanationTips onClose={handlePopupTipsClose} />
        )}
      </main>
      <Footer />
      <button className="p1">žlutá</button>
      <button className="p2">modrá</button>
      <button className="p3">láska</button>
      <button className="p4">zloba</button>
      <button className="p5">nadšení</button>
      <button className="p6">nuda</button>
      <button className="p7">odvaha</button>
      <button className="p8">strach</button>
    </div>
  );
};
