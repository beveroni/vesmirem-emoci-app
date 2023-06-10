import React from 'react';
import './style.css';
import { HomeArrow } from '../HomeArrow';
import { useParams } from 'react-router-dom';
import { planets } from '../../planet-database';

export const PopupGame = ({ text, question }) => {
  const { planetText } = useParams();
  const planet = planets.find((planet) => planet.task === planetText);
  console.log(planet);
  const planetQuestion = planets.find(
    (planet) => planet.question === planetText,
  );

  return (
    <div className="popup">
      <button id="popup__close">
        <img src="/img/cross.svg" alt="cross_button" />
      </button>
      <div className="popup__content">
        <p className="popup__content--task1">{text}</p>
        <div className="popup__game"></div>
      </div>
      <div className="popup__content2">
        <img className="stars__group" src="/img/stars_group.svg" alt="" />
        <p className="popup__content--task2">{question}</p>
        <HomeArrow />
      </div>
    </div>
  );
};
