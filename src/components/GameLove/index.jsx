import React from 'react';
import './style.css';

export const GameLove = ({ onFinish }) => {
  const handleSubmit = (event) => {
    event.preventDefault(), onFinish();
  };

  return (
    <div className="popup__game--love">
      <form className="game__love--form" onSubmit={handleSubmit}>
        <textarea
          id="message"
          className="game__love--textarea"
          placeholder="Milý Měsíci, ..."
          required
        ></textarea>
        <button id="love-btn" className="game__love--btn" type="submit">
          <img
            className="game__love--btn"
            src="/img/love_stamp.svg"
            alt="známka"
          />
        </button>
      </form>
      <img className="game__love--img" src="/img/love_letter.svg" />
    </div>
  );
};
