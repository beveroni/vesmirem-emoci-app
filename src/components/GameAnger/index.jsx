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

export const GameAnger = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  );

  // return (
  //   <>
  //     <div className="popup__game--grouptrash">
  //       <img src="/img/popelnice_modra.svg" alt="" className="trashbin" />
  //       <img src="/img/popelnice_zelena.svg" alt="" className="trashbin" />
  //       <img src="/img/popelnice_žlutá.svg" alt="" className="trashbin" />
  //       <img src="/img/popelnice.svg" alt="" className="trashbin" />
  //     </div>
  //     <div className="popup__game--trash">
  //       <img src="/img/družice.svg" alt="" className="trash" />
  //       <img src="/img/jablko.svg" alt="" className="trash" />
  //       <img src="/img/kelímek.svg" alt="" className="trash" />
  //       <img src="/img/papír.svg" alt="" className="trash" />
  //       <img src="/img/pet_lahev.svg" alt="" className="trash" />
  //       <img src="/img/vesmirne_sklo.svg" alt="" className="trash" />
  //       <img src="/img/vesmirny_odpad.svg" alt="" className="trash" />
  //     </div>
  //   </>
  // );
};
