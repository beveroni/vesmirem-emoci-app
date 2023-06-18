import React from 'react';
import './style.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from './container';
import { TouchBackend } from 'react-dnd-touch-backend'


export const GameAnger = ({ onFinish }) => {
  const opts = {
    enableMouseEvents: true,
    enableTouchEvents: true,
             
      };

  return (
    <div className="game__anger">
      <DndProvider backend={TouchBackend} options={opts}>
        <Container onFinish={onFinish} />
      </DndProvider>
    </div>
  );
};
