import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { testMiddleware } from './middlewares';
import reducer from '../reducers';

const configureStore = (intialState = {}, hooks = {}) => {
  const middlewares = [thunk, testMiddleware(hooks)];
  return createStore(reducer, intialState, applyMiddleware(...middlewares));
};

export default configureStore;
