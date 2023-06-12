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
  // const [isRocketBubbleOpen, setIsRocketBubbleOpen] = useState(true);
  // const [isPlanetBubbleOpen, setIsPlanetBubbleOpen] = useState(true);
  const [isPlanetBubbleVisible, setIsPlanetBubbleVisible] = useState(false);
  const [isRocketBubbleVisible, setIsRocketBubbleVisible] = useState(false);

  useEffect(() => {
    const planetBubbleTimer = setTimeout(() => {
      setIsPlanetBubbleVisible(true);
    }, 4300);

    const rocketBubbleTimer = setTimeout(() => {
      setIsRocketBubbleVisible(true);
    }, 4300);

    return () => {
      clearTimeout(planetBubbleTimer);
      clearTimeout(rocketBubbleTimer);
    };
  }, [isPlanetBubbleVisible, isRocketBubbleVisible]);

  const handleGameFinished = () => {
    gameFinished(planet.name);
  };

  const handleGameStart = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // const handleRocketClick = () => {
  //   setIsRocketBubbleOpen(true);
  // };

  // const handlePlanetClick = () => {
  //   setIsPlanetBubbleOpen(true);
  // };

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
      <ButtonGameStart onButtonClick={handleGameStart} />
    </div>
  );
};
