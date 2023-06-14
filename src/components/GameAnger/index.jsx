import React from 'react';
import './style.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from './container';

export const GameAnger = ({ onFinish }) => {
  return (
    <>
      <div className="game__anger">
        <DndProvider backend={HTML5Backend}>
          <Container onFinish={onFinish} />
        </DndProvider>
      </div>
    </>
  );
};
