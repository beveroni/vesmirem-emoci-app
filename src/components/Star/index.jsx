import React from 'react';
import './style.css';

export const Star = ({ color }) => {
  return (
    <div className="score-star" style={{ color: color }}>
      <img src="/img/star.svg" alt="hvězdičkový bod" />
    </div>
  );
};
