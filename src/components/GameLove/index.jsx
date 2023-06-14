import React from 'react';
import './style.css';
import { useState } from 'react';

export const GameLove = ({ onFinish }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message.trim().length > 6) {
      onFinish();
    } else {
      setError('Napište prosím zprávu delší než 6 písmen.');
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    setError('');
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
          />
        </button>
      </form>
      <img className="game__love--img" src="/img/love_letter.svg" />
      {message && <div className="game__love--message">{message}</div>}
    </div>
  );
};
