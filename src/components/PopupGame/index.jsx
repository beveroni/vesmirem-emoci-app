import React, { useState } from 'react';
import './style.css';
import { ContinueArrow } from '../ContinueArrow';
import { Star } from '../Star';
import { Cross } from '../Cross';

export const PopupGame = ({
  background,
  task,
  question,
  game,
  onClose,
  color,
  gameFinished,
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
    gameFinished();
  };

  return (
    <div
      className="game-popup"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="popup__content">
        <Cross onClick={onClose} />
        {gameFinish ? (
          <>
            <div className="popup__content--star">
              <Star color={color} />
            </div>
            <div className="popup__content2">
              <img className="stars__group" src="/img/stars_group.svg" alt="" />
              <p className="popup__content--task2">{question}</p>
              <ContinueArrow />
            </div>
          </>
        ) : (
          <>
            {' '}
            <p className="popup__content--task1">{task}</p>
            <Game onFinish={handleShowStar} />
          </>
        )}
      </div>
    </div>
  );
};
