import React from 'react';
import { Header } from '../../components/Header';
import './style.css';
import { ButtonGameStart } from '../../components/ButtonGameStart';
import { PopupGame } from '../../components/PopupGame';
import { ConversationRocketBubble } from '../../components/ConversationRocketBubble';
import { ConversationPlanetBubble } from '../../components/ConversationPlanetBubble';
import { Rocket } from '../../components/Rocket';
import { Planet } from '../../components/Planet';
import { planets } from '../../planet-database';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const GamePage = ({ finishedGames, gameFinished }) => {
  const { planetId } = useParams();
  const planet = planets.find((planet) => planet.name === planetId);
  const [showPopup, setShowPopup] = useState(false);
  const [isPlanetBubbleVisible, setIsPlanetBubbleVisible] = useState(false);
  const [isRocketBubbleVisible, setIsRocketBubbleVisible] = useState(false);
  const [isTimersFinished, setIsTimersFinished] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const rocketBubbleTimer = setTimeout(() => {
      setIsRocketBubbleVisible(true);
      setIsTimersFinished(false);
      setIsButtonVisible(false);
    }, 4300);

    const planetBubbleTimer = setTimeout(() => {
      setIsPlanetBubbleVisible(true);
      setIsTimersFinished(true);
      setIsButtonVisible(true);
    }, 4310);

    return () => {
      clearTimeout(planetBubbleTimer);
      clearTimeout(rocketBubbleTimer);
    };
  }, [isPlanetBubbleVisible, isRocketBubbleVisible]);

  const handleGameStart = () => {
    if (isTimersFinished) {
      setShowPopup(true);
    }
  };

  const handleGameFinished = () => {
    gameFinished(planet.name);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="game-page">
      <Header finishedGames={finishedGames} />
      <div className="conversation">
        <div className="conversation__rocket">
          {isRocketBubbleVisible && (
            <ConversationRocketBubble dialogrocket={planet.rocketDialog} />
          )}
          <Rocket />
        </div>
        <div className="conversation__planet">
          {isPlanetBubbleVisible && (
            <ConversationPlanetBubble
              color={planet.color}
              dialog={planet.planetDialog}
            />
          )}
          <Planet planet={planet} />
        </div>
      </div>
      {showPopup && (
        <PopupGame
          gameFinished={handleGameFinished}
          background={planet.backgroundGame}
          task={planet.task}
          game={planet.game}
          question={planet.question}
          onClose={handleClosePopup}
          color={planet.color}
        />
      )}
      {isButtonVisible && (
        <ButtonGameStart
          onButtonClick={handleGameStart}
          disabled={!isTimersFinished}
        />
      )}
    </div>
  );
};
