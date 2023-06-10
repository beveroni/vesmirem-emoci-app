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
import { useState } from 'react';

export const GamePage = () => {
  const { planetId } = useParams();
  const planet = planets.find((planet) => planet.name === planetId);
  const [showPopup, setShowPopup] = useState(false);
  const [isRocketBubbleOpen, setIsRocketBubbleOpen] = useState(false);
  const [isPlanetBubbleOpen, setIsPlanetBubbleOpen] = useState(false);

  const handleGameStart = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRocketClick = () => {
    setIsRocketBubbleOpen(true);
  };

  const handlePlanetClick = () => {
    setIsPlanetBubbleOpen(true);
  };

  return (
    <>
      <Header />
      <div className="conversation">
        <div className="conversation__rocket">
          {isRocketBubbleOpen && (
            <ConversationRocketBubble dialogrocket={planet.rocketDialog} />
          )}
          <Rocket onClick={handleRocketClick} />
        </div>
        <div className="conversation__planet">
          {isPlanetBubbleOpen && (
            <ConversationPlanetBubble dialog={planet.planetDialog} />
          )}
          <Planet onClick={handlePlanetClick} planet={planet} />
        </div>
      </div>
      {showPopup && (
        <PopupGame
          background={planet.backgroundGame}
          task={planet.task}
          game={planet.game}
          question={planet.question}
          onClose={handleClosePopup}
        />
      )}
      <ButtonGameStart onButtonClick={handleGameStart} />
    </>
  );
};
