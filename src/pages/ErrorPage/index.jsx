import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="error__page">
      <div className="errorpage__container">
        <h2 className="erropage__heading">
          <strong className="errorpage_strong">404:</strong> Ocitl jsi se v
          temných hlubinách vesmíru
        </h2>
        <p className="erropage__param">
          "Vypadá to, že se trošku ztrácíš ve vesmíru! Počkej chvilku, ať nám
          naše raketka najde správnou cestu zpět do hry. Vesmír je plný
          dobrodružství, takže se brzy vrátíš zpátky k objevování!"
        </p>
        <Link to="/" className="link__center">
          <img
            src="/img/astronaut.svg"
            alt="obrázek kosmonauta odkazující na domovskou stránku"
            className="astronaut_errorpage"
          />
        </Link>
        <div className="errorpage__rocket" />
      </div>
    </div>
  );
};
