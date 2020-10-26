import React from 'react';
import './GameMenu.css';

export const GameMenu = () => {

  return (

      
    <div className='menu'>
      <input
        type="checkbox"
        name="menu__input"
        id="menu__input"
        class="menu__input"
      />
      <label for="menu__input" class="menu__label">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
      <ul className="menu__list">
        <li className="menu__item">
          <p className="menu__prize">$1,000,000</p>
        </li>
        <li className="menu__item ">
          <p className="menu__prize">$500,000</p>
        </li>
        <li className="menu__item menu__item--active">
          <p className="menu__prize">$250,000</p>
        </li>
        <li className="menu__item menu__item--inactive">
          <p className="menu__prize">$125,000</p>
        </li>
      </ul>
    </div>
  )
}