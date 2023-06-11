import React from 'react';
import './style.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from './container';

// export const ItemTypes = {
//   FOOD: 'food',
//   OTHER: 'other',
//   PAPER: 'paper',
//   PET: 'pet',
// };

export const ItemTypes = {
  FOOD: 'food',
  GLASS: 'glass',
  PAPER: 'paper',
};

export const GameAnger = ({ onFinish }) => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Container onFinish={onFinish} />
      </DndProvider>
    </div>
  );
};
