import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import { Card } from '../Card';

export const GameJoy = ({ onFinish }) => {
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

  useEffect(() => {
    if (hiddenCards.length === 6) {
      onFinish();
    }
  }, [hiddenCards]);
  console.log(hiddenCards);
  return (
    <>
      <div className="popup__game--joy">
        <div className="popup__game--column1">
          <Card
            onClick={setSelectedLeft}
            name={'rabbit'}
            hidden={hiddenCards.includes('rabbit')}
            selected={selectedLeft === 'rabbit'}
          />
          <Card
            onClick={setSelectedLeft}
            name={'astronaut'}
            hidden={hiddenCards.includes('astronaut')}
            selected={selectedLeft === 'astronaut'}
          />
          <Card
            onClick={setSelectedRight}
            name={'carrot'}
            hidden={hiddenCards.includes('carrot')}
            selected={selectedLeft === 'carrot'}
          />
        </div>
        <div className="popup__game--column1">
          <Card
            onClick={setSelectedLeft}
            name={'dummy'}
            hidden={hiddenCards.includes('dummy')}
            selected={selectedLeft === 'dummy'}
          />
          <Card
            onClick={setSelectedRight}
            name={'baby'}
            hidden={hiddenCards.includes('baby')}
            selected={selectedLeft === 'baby'}
          />
          <Card
            onClick={setSelectedRight}
            name={'rocket'}
            hidden={hiddenCards.includes('rocket')}
            selected={selectedLeft === 'rocket'}
          />
        </div>
      </div>
    </>
  );
};
