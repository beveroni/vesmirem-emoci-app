import React from 'react';
import './style.css';
import { PopupExplanation } from '../PopupExplanation';

export const PopupExplanationRules = ({ onClose }) => {
  return (
    <PopupExplanation onClose={onClose}>
      <div className="popup__rules--description">
        <h2>Pravidla hry</h2>
        <h3>Jak hrát</h3>
        <p>
          Hra je koncipována jako herní pole, které hráč prochází podle
          vlastního uvážení a řeší úkoly spojené s jednotlivými částmi herního
          pole. Hra je u konce až ve chvíli, kdy hráč úspěšně navštíví všechny
          planety a jsou mu připsány všechny hvězdy.
        </p>
        <h3>Začátek hry</h3>
        <p>
          Hru spustíš klikem na ikonu play na domovské stránce. Z domovské
          stránky se dostanete na herní plochu s planetami. Vybere si planetu,
          která se vám líbí a dostanete se do herního pole, kde se dozvíte úvod
          do úkolu kliknutím na raketu a následně na planetu. Po skončení
          rozhovoru stačí kliknout na tlačítko úkol, kde na Vás bude čekat první
          úkol k vyřešení. Stejným postupem projdete všechny planety a splníte i
          všechny následující úkoly. U úkolů s přiřazováním stačí kliknout a
          táhnout předmět na příslušné místo. Pokud hrajete na počítači stačí na
          ikony nebo tlačítka úkolů kliknout myší. V případě mobilu nebo tabletu
          stačí ťuknout prstem.
        </p>
        <h3>Cíl hry</h3>
        <p>
          Cílem hry je seznámit děti hravou formou se základními emocemi, jak na
          ně reagovat a dále s nimi pracovat.
        </p>
      </div>
    </PopupExplanation>
  );
};
