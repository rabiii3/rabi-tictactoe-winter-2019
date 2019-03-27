import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import { myLogger } from '../middlewares/myLogger';

const configureStore = (intialState = {}) => {
  const logger = createLogger();
  const middlewares = [thunk, logger, myLogger];
  return createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middlewares)));
};

export default configureStore;
