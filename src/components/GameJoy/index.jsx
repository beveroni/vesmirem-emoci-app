import React from 'react';
import './style.css';

export const GameJoy = () => {
  return (
    <>
      <div className="popup__game--joy">
        <div className="popup__game--column1">
          <img
            src="/img/game_joy_card_rabbit.svg"
            alt="game card rabbit"
            className="game__card"
          />
          <img
            src="/img/game_joy_card_astronaut.svg"
            alt="game card astronaut"
            className="game__card"
          />
          <img
            src="/img/game_joy_card_baby.svg"
            alt="game card baby"
            className="game__card"
          />
        </div>
        <div className="popup__game--column2">
          <img
            src="/img/game_joy_card_dummy.svg"
            alt="game card dummy"
            className="game__card"
          />
          <img
            src="/img/game_joy_card_carrot.svg"
            alt="game card carrot"
            className="game__card"
          />
          <img
            src="/img/game_joy_card_rocket.svg"
            alt="game card rocket"
            className="game__card"
          />
        </div>
      </div>
    </>
  );
};
