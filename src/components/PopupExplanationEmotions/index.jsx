import React from 'react';
import './style.css';
import { PopupExplanation } from '../PopupExplanation';

export const PopupExplanationEmotions = () => {
  return (
    <PopupExplanation>
      <div className="popup__emotions--description">
        <h2>Seznam emocí použitých ve hře</h2>
        <div className="emotions__container">
          <div className="emotions__container--title">
            <img
              className="planets-miniature"
              src="img/planet_joy.svg"
              alt="planetka Radost"
            />
            <h3>Radost</h3>
          </div>
          <p>
            Radost je příjemná a veselá emoce, která vyjadřuje štěstí, potěšení
            a nadšení. Je spojena s pozitivními událostmi, úspěchy nebo
            příjemnými zážitky.
          </p>
        </div>
        <div className="emotions__container">
          <div className="emotions__container--title">
            <img
              className="planets-miniature"
              src="img/planet_sadness.svg"
              alt="planetka Smutek"
            />
            <h3>Smutek</h3>
          </div>
          <p>
            Smutek je emoční stav vyjadřující zármutek, ztrátu nebo bolest. Lidé
            se cítí smutní v reakci na negativní události, jako je ztráta
            blízkého člověka, selhání nebo rozchod s někým koho mají rádi.
          </p>
        </div>
        <div className="emotions__container">
          <div className="emotions__container--title">
            <img
              className="planets-miniature"
              src="img/planet_love.svg"
              alt="planetka Láska"
            />
            <h3>Láska</h3>
          </div>
          <p>
            Láska je hluboká emoční připoutanost a náklonnost k někomu nebo
            něčemu. Vyjadřuje péči, soucit, ochranu a důvěru. Láska může být
            vztahem mezi rodinnými příslušníky, přáteli nebo romantickým
            partnerstvím.
          </p>
        </div>
      </div>
      <div className="emotions__container">
        <div className="emotions__container--title">
          <img
            className="planets-miniature"
            src="img/planet_anger.svg"
            alt="planetka Vztek"
          />
          <h3>Vztek</h3>
        </div>
        <p>
          Vztek je silná negativní emoce, která vyjadřuje hněv, frustraci a
          nevoli. Je spojen s pocitem nespravedlnosti, zklamání nebo
          nepříjemnými situacemi, které vyvolávají impuls k projevu
          nespokojenosti.
        </p>
      </div>
      <div className="emotions__container">
        <div className="emotions__container--title">
          <img
            className="planets-miniature"
            src="img/planet_enthusiasm.svg"
            alt="planetka Nadšení"
          />
          <h3>Nadšení</h3>
        </div>
        <p>
          Nadšení je silná pozitivní emoce, která vyjadřuje kombinaci
          zvědavosti, odvahy a touhy pustit se do nových věcí. Je spojeno s
          očekáváním a radostí z budoucích událostí, nových zážitků nebo objevů.
        </p>
      </div>
      <div className="emotions__container">
        <div className="emotions__container--title">
          <img
            className="planets-miniature"
            src="img/planet_boredom.svg"
            alt="planetka Nuda"
          />
          <h3>Nuda</h3>
        </div>
        <p>
          Nuda je emoční stav vyjadřující nedostatek zájmu, stimulace nebo
          vzrušení. Nudíme se, když nemáme nic zajímavého, co by nás zabavilo.
          Dlouhodobá nuda může vést k pocitu neuspokojení nebo frustrace.
        </p>
      </div>
      <div className="emotions__container">
        <div className="emotions__container--title">
          <img
            className="planets-miniature"
            src="img/planet_courage.svg"
            alt="planetka Odvaha"
          />
          <h3>Odvaha</h3>
        </div>
        <p>
          Odvaha je emocionální stav, který vyjadřuje statečnost, odhodlání a
          odvahu čelit strachu nebo nebezpečí. Je spojena s překonáním překážek,
          riskováním a prosazováním vlastních přesvědčení.
        </p>
      </div>
      <div className="emotions__container">
        <div className="emotions__container--title">
          <img
            className="planets-miniature"
            src="img/planet_fear.svg"
            alt="planetka Strach"
          />
          <h3>Strach</h3>
        </div>
        <p>
          Strach je negativní emocionální stav vyvolaný pocitem ohrožení,
          nebezpečí nebo nejistoty. Lidé se cítí znepokojeni, nervózní nebo
          vystrašení při konfrontaci s možným rizikem nebo strašidelnou situací.
        </p>
      </div>
    </PopupExplanation>
  );
};
