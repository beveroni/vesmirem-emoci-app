import React from 'react';
import './style.css';
import { useState } from 'react';

export const GameLove = ({ onFinish }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message.trim().length > 6) {
      onFinish();
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const enlargedImageStyles = {
    transition: 'all 0.3s',
    transform: `scale(${1 + message.length * 0.005})`,
  };

  return (
    <div className="popup__game--love">
      <form className="game__love--form" onSubmit={handleSubmit}>
        <textarea
          id="message"
          className="game__love--textarea"
          placeholder="Milý Měsíci, ..."
          required
          value={message}
          onChange={handleChange}
        ></textarea>
        <button
          id="love-btn"
          className="game__love--btn"
          type="submit"
          disabled={message.trim().length <= 6}
        >
          <img
            className="game__love--btn"
            src="/img/love_stamp.svg"
            alt="známka"
            style={enlargedImageStyles}
          />
        </button>
      </form>
      <img className="game__love--img" src="/img/love_letter.svg" />
    </div>
  );
};
