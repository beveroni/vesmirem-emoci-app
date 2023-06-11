import React, { useEffect } from 'react';
import './style.css';

export const Card = ({ onClick, name, hidden, selected }) => {
  const handleClick = () => {
    onClick(name);
  };


  return (
    <>
      <img
        onClick={handleClick}
        src={`/img/game_joy_card_${name}.svg`}
        alt="game card rabbit"
        // className={`game__card ${hidden ? 'game__card hidden' : ''}`+ ${

        // }}
      />
    </>
  );
};

