import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import { Card } from '../Card';

export const GameJoy = () => {
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [hiddenCards, setHiddenCards] = useState([]);

  useEffect(() => {
    if (selectedRight && selectedLeft) {
      const isMatched =
        (selectedLeft === 'rabbit' && selectedRight === 'carrot') ||
        (selectedLeft === 'astronaut' && selectedRight === 'rocket') ||
        (selectedLeft === 'dummy' && selectedRight === 'baby');

      if (isMatched) {
        const newHiddenCards = [...hiddenCards, selectedRight, selectedLeft];
        setHiddenCards(newHiddenCards);
      }
    }
  }, [selectedLeft, selectedRight]);

  console.log(hiddenCards);
  return (
    <>
      <div className="popup__game--joy">
        <div className="popup__game--column1">
          <Card onClick={setSelectedLeft} name={'rabbit'} />
          <Card onClick={setSelectedLeft} name={'astronaut'} />
          <Card onClick={setSelectedLeft} name={'dummy'} />
        </div>
        <div className="popup__game--column1">
          <Card onClick={setSelectedRight} name={'carrot'} />
          <Card onClick={setSelectedRight} name={'rocket'} />
          <Card onClick={setSelectedRight} name={'baby'} />
        </div>
      </div>
    </>
  );
};
