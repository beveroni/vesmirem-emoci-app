import React from 'react';
import './style.css';
import { AstronautHome } from '../AstronautHome';

export const PopupWinner = ({ dialogWinnerRef }) => {
  return (
    <dialog className="winner-popup" ref={dialogWinnerRef}>
      <div className="winner__content">
        <h2 className="winner__heading">
          <strong>Gratulujeme!</strong>
        </h2>
        <p className="winner__text">
          Skvělá práce! Tvá raketka právě dokončila úžasnou misi a objevila
          všechny planetky ve vesmíru. Bylo to vzrušující dobrodružství plné
          barevných emocí. Tvá odvaha a vytrvalost Ti umožnily překonat veškeré
          překážky a dosáhnout úspěchu. Pamatuj si, že ve vesmíru i v životě je
          důležité prožívat a vyjadřovat své emoce. Ať už jsi na planetce nebo
          na Zemi, buď vždycky srdcem otevřený pro nové dobrodružství, prožívej
          každý okamžik naplno a neboj se dát najevo své pocity.
        </p>
        <p className="winner__text">
          Děkujeme Ti za účast ve hře a doufáme, že se brzy vrátíš na další
          dobrodružství mezi hvězdami. Vesmír je plný překvapení a čeká na Tebe.
        </p>
        <div className="winner__astronaut">
          <AstronautHome />
        </div>
      </div>
    </dialog>
  );
};
