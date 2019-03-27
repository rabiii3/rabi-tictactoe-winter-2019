import { is } from 'ramda';

export const myLogger = ({ getState, dispatch }) => next => action => {
  console.log(action.type);
  console.log('CURRENT STATE', getState());
  const future = next(action);
  console.log('NEXT STATE', getState());
  return future;
};

export const thunk = ({ getState, dispatch }) => next => action => {
  is(Function, action) ? action(getState, dispatch) : next(action);
};
