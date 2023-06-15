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

  const isIncorrectPair =
    (selected === 'rabbit' && name === 'dummy') ||
    (selected === 'astronaut' && name === 'carrot') ||
    (selected === 'baby' && name === 'rocket');

  const cardClassName = `game__card${hidden ? ' hidden' : ''}${
    selected ? ' selected' : ''
  }`;

  return (
    <img
      onClick={handleClick}
      src={`/img/game_joy_card_${name}.svg`}
      alt={`game card ${name}`}
      className={cardClassName}
    />
  );
};
