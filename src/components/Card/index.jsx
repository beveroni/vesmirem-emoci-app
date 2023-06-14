import React, { useEffect } from 'react';
import './style.css';

export const Card = ({ onClick, name, hidden, selected }) => {
  const handleClick = () => {
    if (selected && !hidden) {
      onClick(null);
    } else {
      onClick(name);
    }
  };

  return (
    <img
      onClick={handleClick}
      src={`/img/game_joy_card_${name}.svg`}
      alt="game card rabbit"
      className={`game__card${hidden ? ' hidden' : ''}${selected ? ' selected' : ''}`}
    />
  );
};
