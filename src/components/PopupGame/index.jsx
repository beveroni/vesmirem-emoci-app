import React from 'react';
import './style.css';
import { HomeArrow } from '../HomeArrow';
import { useParams } from 'react-router-dom';
import { planets } from '../../planet-database';
import { GameAnger } from '../GameAnger';

export const PopupGame = ({ background, task, question, game, onClose }) => {
  // const { planetTask, planetQuestion, planetBackground } = useParams();
  // const planet = planets.find((planet) => planet.task === planetTask);
  // console.log(planet);
  // const planetQuestions = planets.find(
  //   (planet) => planet.question === planetQuestion,
  // );
  const Game = game;

  // const backgroundImage = planets.find(
  //   (planet) => planet.backgroundGame === planetBackground,
  // );

  return (
    <div className="popup" style={{ backgroundImage: `url(${background})` }}>
      <button id="popup__close" onClick={onClose}>
        <img src="/img/cross.svg" alt="cross_button" />
      </button>
      <div className="popup__content">
        <p className="popup__content--task1">{task}</p>
        <Game />
      </div>
      <div className="popup__content2">
        <img className="stars__group" src="/img/stars_group.svg" alt="" />
        <p className="popup__content--task2">{question}</p>
        <HomeArrow />
      </div>
    </div>
  );
};
