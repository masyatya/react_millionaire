import React from 'react';
import logo from '../assets/images/logo.png';
import './GameStartOver.css';

export const GameOver = () => {
  return (
    <div className='main over container'>
      <div className="main__container">
        <div className="main__info">
          <div className="main__logo">
            <img src={logo} alt="Logo" className='logo'/>
          </div>
          <div className="over__info-container main__heading-container">
            <div className="over__heading-container">
              <h2 className="over__total">
                Total score:
              </h2>
              <h1 className="main__heading over__heading">
                $8,000 earned
              </h1>
            </div>
            <button
              type='button'
              className='button main__button'
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}