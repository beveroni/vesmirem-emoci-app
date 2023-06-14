import React from 'react';
import './style.css';
import { PopupExplanation } from '../PopupExplanation';
import { planets } from '../../planet-database';

export const PopupExplanationEmotions = ({ onClose, dialogRef }) => {
  return (
    <PopupExplanation onClose={onClose} dialogRef={dialogRef}>
      <div className="popup__emotions--description">
        <h2>Seznam emocí použitých ve hře</h2>
        {planets.map((planet) => (
          <div key={planet.id} className="emotions__container">
            <div className="emotions__container--title">
              <img
                className="planets-miniature"
                src={planet.avatar}
                alt={`planetka ${planet.label}`}
              />
              <h3>{planet.label}</h3>
            </div>
            <p>{planet.description}</p>
          </div>
        ))}
      </div>
    </PopupExplanation>
  );
};
