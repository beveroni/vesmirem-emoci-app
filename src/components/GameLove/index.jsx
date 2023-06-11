import React from 'react';
import './style.css';

export const GameLove = ({ onFinish }) => {
  const handleSubmit = (event) => {
    event.preventDefault(), onFinish();
  };

  return (
    <div className="task-container">
      <div className="task__love--container">
        <form className="task__love--form" onSubmit={handleSubmit}>
          <textarea
            id="message"
            className="task__love--textarea"
            placeholder="Milý Měsíci, ..."
            required
          ></textarea>
          <button id="love-btn" className="task__love--btn" type="submit">
            <img
              className="task__love--btn"
              src="/img/love_stamp.svg"
              alt="známka"
            />
          </button>
        </form>
        <img className="task__love--img" src="/img/love_letter.svg" />
      </div>
      <div className="score__star--love">
        <img src="/img/love_star.svg" alt="hvězdička za splnění úkolu" />
      </div>
    </div>
  );
};
