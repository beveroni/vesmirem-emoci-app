import React, { useState } from 'react';
import './style.css';
import { ContinueArrow } from '../ContinueArrow';
import { useParams } from 'react-router-dom';
import { planets } from '../../planet-database';
import { GameAnger } from '../GameAnger';
import { Star } from '../Star';

export const PopupGame = ({
  background,
  task,
  question,
  game,
  onClose,
  color,
}) => {
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

  //e.
  const [gameFinish, setGameFinish] = useState(false);
  const handleShowStar = () => {
    setGameFinish(true);
  };

  return (
    <div className="popup" style={{ backgroundImage: `url(${background})` }}>
      <button id="popup__close" onClick={onClose}>
        <img src="/img/cross.svg" alt="cross_button" />
      </button>
      <div className="popup__content">
        <p className="popup__content--task1">{task}</p>
        {gameFinish ? (
          <Star color={color} />
        ) : (
          <Game onFinish={handleShowStar} />
        )}
      </div>
      <div className="popup__content2">
        <img className="stars__group" src="/img/stars_group.svg" alt="" />
        <p className="popup__content--task2">{question}</p>
        <ContinueArrow />
      </div>
    </div>
  );
};
