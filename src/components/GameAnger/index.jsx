import React from 'react';
import './style.css';
import { DndProvider } from 'react-dnd';
import { Container } from './container';
import { TouchBackend } from 'react-dnd-touch-backend'


export const GameAnger = ({ onFinish }) => {
  const opts = {
    enableMouseEvents: true,
    enableTouchEvents: true,
    // enableHoverOutsideTarget: true, 
    // delayTouchStart: 100,
    // delayMouseStart: 0, 
             
      };

  return (
    <div className="game__anger">
      <DndProvider backend={TouchBackend} options={opts}>
        <Container onFinish={onFinish} />
      </DndProvider>
    </div>
  );
};

 