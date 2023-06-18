import React, { useRef } from 'react';
import './style.css';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { PopupExplanationAbout } from '../../components/PopupExplanationAbout';
import { PopupExplanationEmotions } from '../../components/PopupExplanationEmotions';
import { PopupExplanationRules } from '../../components/PopupExplanationRules';
import { PopupExplanationTips } from '../../components/PopupExplanationTips';

export const HomePage = () => {
  const aboutDialogRef = useRef(null);
  const emotionsDialogRef = useRef(null);
  const rulesDialogRef = useRef(null);
  const tipsDialogRef = useRef(null);

  // otevírání pop-upů
  const openPopupAbout = () => {
    aboutDialogRef.current.showModal();
  };

  const openPopupEmotions = () => {
    emotionsDialogRef.current.showModal();
  };

  const openPopupRules = () => {
    rulesDialogRef.current.showModal();
  };

  const openPopupTips = () => {
    tipsDialogRef.current.showModal();
  };

  // Zavírání pop-upů
  const closePopupAbout = () => {
    aboutDialogRef.current.close();
  };

  const closePopupEmotions = () => {
    emotionsDialogRef.current.close();
  };

  const closePopupRules = () => {
    rulesDialogRef.current.close();
  };

  const closePopupTips = () => {
    tipsDialogRef.current.close();
  };

  return (
    <>
      <div className="homepage">
        <h1>Vesmírem emocí</h1>
        <img className="rocket" src="/img/rocket.svg" alt="raketka" />
        <div className="homepage__container">
          <div className="homepage__container">
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
              onClick={openPopupAbout}
            >
              O projektu
            </button>
            <button
              className="button__emotions"
              id="popup__open--emotions"
              onClick={openPopupEmotions}
            >
              Seznam emocí
            </button>
            <button
              className="button__rules"
              id="popup__open--rules"
              onClick={openPopupRules}
            >
              Pravidla
            </button>
            <button
              className="button__tips"
              id="popup__open--tips"
              onClick={openPopupTips}
            >
              Další tipy
            </button>
            <PopupExplanationAbout
              onClose={closePopupAbout}
              dialogRef={aboutDialogRef}
            />
            <PopupExplanationEmotions
              onClose={closePopupEmotions}
              dialogRef={emotionsDialogRef}
            />
            <PopupExplanationRules
              onClose={closePopupRules}
              dialogRef={rulesDialogRef}
            />
            <PopupExplanationTips
              onClose={closePopupTips}
              dialogRef={tipsDialogRef}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
