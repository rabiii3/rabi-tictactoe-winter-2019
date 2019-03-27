import { combineReducers } from 'redux';
import game from './game';
import history from './history';

const root = combineReducers({
  game,
  history,
});

export default root;
