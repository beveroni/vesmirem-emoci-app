import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <footer>
      <div className="home-page__footer">
        <p>Veronika Bendová & Eliška Korencová</p>
        <a
          className="footer__link--academy"
          href="https://www.czechitas.cz/kurzy/digitalni-akademie-web"
          target="_blank"
        >
          DA WEB, 2023
        </a>
        <div className="footer__link--czechitas">
          <a href="https://www.czechitas.cz/" target="_blank">
            <img src="./img/logo_czechitas.svg" alt="logo Czechitas z.ú." />
          </a>
        </div>
      </div>
    </footer>
  );
};
