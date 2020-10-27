import React from 'react';
import { Route } from 'react-router-dom';
import { GameStart } from './components/GameStart';
import { GameOver } from './components/GameOver';
import { Game } from './components/Game';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={GameStart} />
      <Route path='/game' component={Game} />
      <Route path='/over' component={GameOver} />
    </div>
  );
}

export default App;
