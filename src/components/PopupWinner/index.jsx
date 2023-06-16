import React from 'react';
import './style.css';
import { AstronautHome } from '../AstronautHome';

export const PopupWinner = () => {
  return (
    <div className="winner-popup">
      <div className="winner__content">
        <h2 className="winner__heading">
          <strong>Gratulujeme!</strong>
        </h2>
        <p>
          Skvělá práce! Tvá raketka právě dokončila úžasnou misi a objevila
          všechny planetky ve vesmíru. Bylo to vzrušující dobrodružství plné
          barevných planetek a nádherných emocí. Jsi opravdový/a mistr/ka
          vesmíru a emocií! Tvá odvaha a vytrvalost ti umožnily překonat veškeré
          překážky a dosáhnout úspěchu. Každá planetka, kterou jsi objevil/a,
          přináší s sebou jedinečné emoce - radost, lásku, smutek, strach
          nadšení a další. Pamatuj si, že ve vesmíru i v životě je důležité
          prožívat a vyjadřovat své emoce. Ať už jsi na planetce nebo na Zemi,
          buď vždycky srdcem otevřený pro nové dobrodružství, prožívej každý
          okamžik naplno a neboj se dát najevo své pocity.
        </p>
        <p>
          Děkujeme ti za účast ve hře a doufáme, že se brzy vrátíš na další
          dobrodružství mezi hvězdami. Vesmír je plný překvapení a čeká na tebe
        </p>
        <div className="winner__astronaut">
          <AstronautHome />
        </div>
      </div>
    </div>
  );
};