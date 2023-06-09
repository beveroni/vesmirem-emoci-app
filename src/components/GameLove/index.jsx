import React from 'react';
import './style.css';
import { useState } from 'react';

export const GameLove = ({ onFinish }) => {
  const [message, setMessage] = useState('');
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message.trim().length > 6) {
      onFinish();
    } else {
      setAnimationStarted(false);
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);

    if (!animationStarted && event.target.value.trim().length >= 6) {
      setAnimationStarted(true);
    } else if (animationStarted && event.target.value.trim().length < 6) {
      setAnimationStarted(false);
    }
  };
 
  const enlargedImageStyles = {
    transition: 'all 0.3s',
    transform: `scale(${1 + message.length * 0.01})`,
    filter: 'drop-shadow(2px 2px 4px rgb(255, 255, 0))',
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
            style={animationStarted ? enlargedImageStyles : {}}
          />
        </button>
      </form>
      <img className="game__love--img" src="/img/love_letter.svg" />
    </div>
  );
};
