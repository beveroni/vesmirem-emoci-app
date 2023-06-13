import React from 'react';
import './style.css';

export const ErrorPage = () => {
  return (
    <div className="error__page">
      <div className="errorpage__container">
        <h2 className="erropage__heading">
          <strong className='errorpage_strong'>404:</strong> Ocitl jsi se v temných hlubinách vesmíru
        </h2>
        <p className="erropage__param">
          "Vypadá to, že se trošku ztrácíme ve vesmíru! Počkejme chvilku, ať nám
          naše hvězdičky najdou správnou cestu zpět do hry. Vesmír je plný
          dobrodružství, takže se brzy vrátíme zpátky k objevování!"
        </p>
      </div>
    </div>
  );
};
