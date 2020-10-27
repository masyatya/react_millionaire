import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../store';
import './GameMenu.css';
import config from '../gameConfig.json';

const GameMenu = () => {
  const currentPrize = useSelector(selectors.getPrize);

  return (
    <>
      <input
        type='checkbox'
        name='menu__input'
        id='menu__input'
        className='menu__input'
      />
      <div className='menu'>
        <label htmlFor='menu__input' className='menu__label'>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </label>
        <ul className='menu__list'>
          {[...config.prizes].reverse().map(prize => (
            <li 
              className={`
                menu__item 
                ${prize === currentPrize ? 'menu__item--active' : ''}
                ${+prize < +currentPrize ? 'menu__item--inactive' : ''}
              `}
              key={prize}
            >
              <p className='menu__prize'>{prize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};

export default memo(GameMenu);
