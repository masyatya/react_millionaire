import React from 'react';
import { GameMenu } from './GameMenu';
import './Game.css';

export const Game = () => {

  return (
    <div className='game'>
      <div className="question">
        <h2 className="question__text">
          How old your elder brother was 10 years before you was born, mate?
        </h2>
        <div className="question__list">
          <div className="question__answer">
            <p className="question__letter">A</p>
            <p className="question__answer-text">10 years</p>
          </div>
          <div className="question__answer">
            <p className="question__letter">B</p>
            <p className="question__answer-text">11 years</p>
          </div>
          <div className="question__answer">
            <p className="question__letter">C</p>
            <p className="question__answer-text">12 years</p>
          </div>
          <div className="question__answer">
            <p className="question__letter">D</p>
            <p className="question__answer-text">15 years</p>
          </div>
        </div>
      </div>
      
      <GameMenu />
    </div>
  )
}