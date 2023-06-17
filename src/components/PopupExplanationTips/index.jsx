import React from 'react';
import './style.css';
import { PopupExplanation } from '../PopupExplanation';

export const PopupExplanationTips = ({ onClose, dialogRef }) => {
  return (
    <PopupExplanation onClose={onClose} dialogRef={dialogRef}>
      <div className="popup__rules--tips">
        <h2>Další tipy na práci s emocemi:</h2>
        <p>
          {' '}
          Na trhu je dostupných mnoho různých aktivit zaměřených na práci s
          emocemi, jak pro velké, tak i pro malé hráče. Níže najdete pár tipů od
          nás na další zajimavá zpracování témata pocitů.{' '}
        </p>
        <h4>kartičky:</h4>
        <ul style={{ listStyleType: "square" }}>
          <li>
            <a href="https://tisictvariradosti.cz/">
              https://tisictvariradosti.cz/
            </a>
          </li>
          <li>
            <a
              href="https://nenasilnakomunikace.org/stahnete-si-cviceni-s-kartickami-potreb-a-pocitu/"
                         >
              https://nenasilnakomunikace.org/stahnete-si-cviceni-s-kartickami-potreb-a-pocitu/
            </a>
          </li>
          <li>
            <a href="https://www.b-creative.cz/terapeuticke-pomucky-b-creative-more-emoci--emotion-cards">
              https://www.b-creative.cz/terapeuticke-pomucky-b-creative-more-emoci--emotion-cards
            </a>
          </li>
        </ul>
        <h4>knihy:</h4>
        <ul>
          <li>
            <a href="https://obchod.portal.cz/detska-literatura/mapy-mych-pocitu/">
              https://obchod.portal.cz/detska-literatura/mapy-mych-pocitu/
            </a>
          </li>
          <li>
            <a href="https://www.hostbrno.cz/co-delaji-pocity/">
              https://www.hostbrno.cz/co-delaji-pocity/
            </a>
          </li>
          <li>
            <a href="https://www.irynazelykcz.com/jaapanhnev">
              https://www.irynazelykcz.com/jaapanhnev
            </a>
          </li>

          <li>
            <p>série knih od Nikol Hoření:</p>
            <a href="http://nikolahoreni.cz/projekt/ida-se-raduje">
              http://nikolahoreni.cz/projekt/ida-se-raduje
            </a>
          </li>
        </ul>
        <h4>podcasty:</h4>
        <ul>
          <li>
            <a href="https://psychologie.cz/detske-emoce/">
              https://psychologie.cz/detske-emoce/{' '}
            </a>
            <span> (placený)</span>
          </li>
          <li>
            <a href="https://soundcloud.com/nenasilnypodcast">
              https://soundcloud.com/nenasilnypodcast
            </a>
          </li>
        </ul>
      </div>
    </PopupExplanation>
  );
};
