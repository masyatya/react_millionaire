import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from '../store';
import config from '../gameConfig.json';
import logo from '../assets/images/logo.png';
import './GameStartOver.css';

export const GameOver = () => {
  const history = useHistory();
  const currentPrize = useSelector(selectors.getPrize);
  const [prize, setPrize] = useState(0);

  useEffect(() => {
    const index = config.prizes.indexOf(currentPrize);
    if(index === 0) {
      setPrize(0);
    } else if(index === config.prizes.length - 1) {
      setPrize(config.prizes[config.prizes.length - 1])
    } else {
      setPrize(config.prizes[index-1]);
    }
  }, [currentPrize]);

  if(!prize && prize !== 0) {
    history.push('/');
  }

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
                {(prize || prize === 0) && `$${prize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} earned`}
              </h1>
            </div>
            <NavLink to='/game' >
              <button
                type='button'
                className='button main__button'
              >
                Try again
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}