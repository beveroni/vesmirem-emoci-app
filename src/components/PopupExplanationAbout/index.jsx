import React from 'react';
import './style.css';
import { PopupExplanation } from '../PopupExplanation';

export const PopupExplanationAbout = () => {
  return (
    <PopupExplanation>
      <div className="popup__about--description">
        <h2>O projektu</h2>
        <p>
          Vesmír emocí je krátká zábavná hra, která má malého hráče alespoň
          okrajově zasvětit do základního pojmenování emocí/pocitů a poskytnout
          mu prostor a otázky, jak s nimi pracovat. Proto jsme se rozhodly
          vytvořit hru o raketce, která ve vesmíru navštěvuje jednotlivé
          planetky a pomáhá jim s jejich emočními těžkostmi. Hra je určena jak
          menším hráčům tak i jejich rodičům.
        </p>
        <br />
        <p>
          Hra vznikla jako závěrečný projekt v rekvalifikačním kurzu od
          organizace Czechitas, Digitální akademie - Web, jaro 2023. Grafiku a
          animaci vytvářela Veronika.
        </p>
      </div>
      <div className="popup__about--us">
        {/* <h3>O nás</h3>  */}
        <div className="about-us__veronika">
          <div className="about-us__img">
            <img
              src="img/astronaut_v.svg"
              className="astronaut"
              alt="kosmonaut Veronika"
            />
          </div>
          <h3>Ahoj, já jsem Veronika, </h3>
          <p>
            jsem občas trochu střelec a rebel, který pořád o něčem přemýšlí.
            Ráda bych se tak nějak oklikou přes IT vrátila k animaci. V
            programování jsem úplný začátečník a účast v DA je pro mne velkou
            výzvou 😉. Single maminka dvou skvělých dětí - 7 let a 4 roky. A
            rodilá Ostravačka (přízvuk mi zůstal i po osmi letech v Praze).
          </p>
          <a href="https://github.com/beveroni">
            <img
              src="/img/github.png"
              className="github_logo"
              alt="logo Github"
            />
          </a>
        </div>

        <div className="about-us__eliska">
          <div className="about-us__img">
            <img
              src="/img/astronaut_e.svg"
              className="astronaut"
              alt="kosmonaut Eliška"
            />
          </div>
          <h3>Ahoj, já jsem Eliška,</h3>
          <p>
            vzděláním sociální pracovnice, máma dvou malých dětí, která
            momentálně hledá, kam by se vrtla. Mám ráda různá prostředí, ať už
            sociální, nebo ta na mapě. Na rodičovské dovolené II. jsem se
            rozhodla zkusit udělat otočku o 180° a zjistit, kam mě tato sobní
            challange zanese a zda se mi podaří stát se forntend vývojářkou 😅.
          </p>
          <a href="https://github.com/EliKorenc">
            <img
              src="/img/github.png"
              className="github_logo"
              alt="logo Github"
            />
          </a>
        </div>
      </div>
    </PopupExplanation>
  );
};
