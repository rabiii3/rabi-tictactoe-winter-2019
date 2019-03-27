import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const configureStore = (intialState = {}) => {
  const middlewares = [thunk];
  return createStore(reducer, intialState, applyMiddleware(...middlewares));
};

export default configureStore;
