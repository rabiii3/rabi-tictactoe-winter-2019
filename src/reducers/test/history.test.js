import reducer from '../history';
import { append } from 'ramda';
import configureStore from '../../store/configureStoreTest';
import { updateHistoryAction, HISTORY_UPDATED } from '../../actions/history';

describe('game reducer', () => {
  const history = [];

  it('should return the initial state', () => {
    expect(reducer(history, {})).toEqual(history);
  });

  it('should handle HISTORY_UPDATED', () => {
    const action = { type: 'HISTORY_UPDATED', payloads: { history: append({ id: history.length + 1 }, history) } };
    expect(reducer(history, action)).toEqual([{ id: 1 }]);
  });
});

describe('history actions', () => {
  it('should HISTORY_UPDATED', () => {
    const computer = { name: 'computer', isComputer: true, piece: 'x' };
    const player = { name: 'computer', piece: 'o' };
    const initialState = { history: [], game: { computer, player } };
    const hook = {
      [HISTORY_UPDATED]: getState => {
        const state = getState();
        expect(state.history).toEqual([{ id: 1, winner: computer }]);
      },
    };
    const store = configureStore(initialState, hook);
    const result = 'x';
    store.dispatch(updateHistoryAction(result));
  });
});
