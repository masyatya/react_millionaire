import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../store';
import { setPrize } from '../store/prize';
import GameMenu from './GameMenu';
import config from '../gameConfig.json';
import './Game.css';

export const Game = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [questionNum, setQuestioNum] = useState(0);
  const [question, setQuestion] = useState(config.questions[0]);
  const prize = useSelector(selectors.getPrize);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  useEffect(() => {
    dispatch(setPrize(config.prizes[0]));
  }, []);

  const selectHandler = (id) => {
    setSelectedAnswer(id);
    if(!question["correct-answer"].some(answer => answer === id)) {
      setTimeout(() => {
        history.push('./over');
      }, 1500);
      return;
    }
    if(questionNum+1 >= config.questions.length) {
      dispatch(setPrize(config.prizes[questionNum]));
      setTimeout(() => {
        history.push('./over');
      }, 1500);
      return;
    }

    setTimeout(() => {
      setQuestion(config.questions[questionNum+1]);
      setQuestioNum(questionNum+1);
      dispatch(setPrize(config.prizes[questionNum+1]));
      setSelectedAnswer(-1);
    }, 1000);
  };

  return (
    <div className='game container'>
      <div className='question'>
        <h2 className='question__text'>
          {question.title}
        </h2>
        <div className='question__list'>
          {question["answer-options"].map((answer, id) => (
            <label htmlFor={id+answer} key={id+answer}>
              <input
                type='radio'
                id={id+answer}
                name='answers'
                checked={selectedAnswer === id}
                className='question__input'
                onChange={() => selectHandler(id)}
                disabled={selectedAnswer !== -1}
              />
              <div 
                className={`
                  question__answer
                  ${selectedAnswer !== -1
                    ? question["correct-answer"].some(answer => answer === id)
                      ? 'question__answer--correct'
                      : 'question__answer--wrong'
                    : ''}
                `}
              >
                <p className='question__letter'>{String.fromCharCode(65+id)}</p>
                <p className='question__answer-text'>{answer}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
      <GameMenu 
        currentPrize={prize}
      />
    </div>
  )
}