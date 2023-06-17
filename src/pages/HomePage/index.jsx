import React, { useRef } from 'react';
import './style.css';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { PopupExplanationAbout } from '../../components/PopupExplanationAbout';
import { PopupExplanationEmotions } from '../../components/PopupExplanationEmotions';
import { PopupExplanationRules } from '../../components/PopupExplanationRules';
import { PopupExplanationTips } from '../../components/PopupExplanationTips';
// import { useState } from 'react';

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

  // export const HomePage = () => {
  // const [showPopupAbout, setShowPopupAbout] = useState(false);
  // const [showPopupEmotions, setShowPopupEmotions] = useState(false);
  // const [showPopupRules, setShowPopupRules] = useState(false);
  // const [showPopupTips, setShowPopupTips] = useState(false);

  //   console.log(showPopupRules);

  //   const handlePopupAboutOpen = () => {
  //     setShowPopupAbout(true);
  //   };

  //   const handlePopupAboutClose = () => {
  //     setShowPopupAbout(false);
  //   };

  // const handlePopupEmotionsOpen = () => {
  //   setShowPopupEmotions(true);
  // };

  // const handlePopupEmotionsClose = () => {
  //   setShowPopupEmotions(false);
  // };

  // const handlePopupRulesOpen = () => {
  //   setShowPopupRules(true);
  // };

  // const handlePopupRulesClose = () => {
  //   setShowPopupRules(false);
  // };

  // const handlePopupTipsOpen = () => {
  //   setShowPopupTips(true);
  // };

  // const handlePopupTipsClose = () => {
  //   setShowPopupTips(false);
  // };

  console.log(openPopupEmotions);

  return (
    <>
      <div className="homepage">
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

          {/* {showPopupAbout && (
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
        )} */}
          <Footer />
      </div>
    </>
  );
};
