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

export const Game = () => {
  const { planetId } = useParams();
  const planet = planets.find((planet) => planet.name === planetId);
  console.log(planet);

  return (
    <>
      <Header />
      <div className="conversation">
        <div className="conversation__rocket">
          <ConversationRocketBubble dialogrocket={planet.rocketDialog} />
          <Rocket />
        </div>
        <div className="conversation__planet">
          <ConversationPlanetBubble dialog={planet.planetDialog} />
          <Planet planet={planet} />
        </div>
      </div>
      {/* <PopupGame text={planet.task} question={planet.question} /> */}
      <ButtonGameStart />
    </>
  );
};
