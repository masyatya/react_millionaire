import { createStore, combineReducers } from 'redux';
import prizeReducer from './prize';
import * as selectorsPrize from './prize';

export const getPrize = state => selectorsPrize.getPrize(state.prize);

const rootReducer = combineReducers({
  prize: prizeReducer,
});

const store = createStore(rootReducer);

export default store;