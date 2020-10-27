import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './GameStartOver.css';

export const GameStart = () => {
  return (
    <div className='main'>
      <div className='main__background'>
      </div>
      <div className='main__container'>
        <div className='main__info'>
          <div className='main__logo'>
            <img src={logo} alt='Logo' className='logo'/>
          </div>
          <div className='main__heading-container'>
            <h1 className='main__heading'>
              Who wants to be<br />
              a millionaire?
            </h1>
            <NavLink to='/game'>
              <button
                type='button'
                className='button main__button'
              >
                Start
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}