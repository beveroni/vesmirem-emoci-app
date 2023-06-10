import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <footer>
      <p>Veronika Bendová & Eliška Korencová</p>
      <a
        className="footer__odkaz--akademie"
        href="https://www.czechitas.cz/kurzy/digitalni-akademie-web"
        target="_blank"
      >
        DA WEB, 2023
      </a>
      <div className="footer__odkaz--czechitas">
        <a href="https://www.czechitas.cz/" target="_blank">
          <img src="./img/logo_czechitas.svg" alt="logo Czechitas z.ú." />
        </a>
      </div>
    </footer>
  );
};
