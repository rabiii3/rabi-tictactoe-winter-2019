import reducer from '../game';
import configureStore from '../../store/configureStoreTest';
import { STARTED, PLAYED, PLAYER_CHANGED, ENDED, startGameAction, manageGame } from '../../actions/game';
import { GAME_STARTED, GAME_OVER } from '../../game';

describe('game reducer', () => {
  const player = { name: 'player', piece: 'o' };
  const computer = { name: 'computer', isComputer: true, piece: 'x' };
  const board = ['x', null, null];
  const game = {
    board,
    currentPlayer: player,
    status: GAME_OVER,
    computer,
    player,
  };

  it('should return the initial state', () => {
    expect(reducer(game, {})).toEqual(game);
  });

  it('should handle STARTED', () => {
    const action = { type: 'STARTED', payloads: { status: GAME_STARTED } };
    expect(reducer(game, action)).toEqual({ ...game, status: GAME_STARTED });
  });

  it('should handle PLAYED', () => {
    const action = { type: 'PLAYED', payloads: { board: ['x', null, 'o'] } };
    expect(reducer(game, action)).toEqual({ ...game, board: ['x', null, 'o'] });
  });

  it('should handle PLAYER_CHANGED', () => {
    const action = { type: 'PLAYER_CHANGED', payloads: { currentPlayer: computer } };
    expect(reducer(game, action)).toEqual({ ...game, currentPlayer: computer });
  });

  it('should handle ENDED', () => {
    const action = { type: 'ENDED', payloads: { status: GAME_OVER } };
    expect(reducer(game, action)).toEqual({ ...game, status: GAME_OVER });
  });
});

describe('game actions', () => {
  const player = { name: 'player', piece: 'o' };
  const computer = { name: 'computer', isComputer: true, piece: 'x' };
  const board = [null, null, null, null, null, null, null, null, null];
  const game = {
    board,
    currentPlayer: player,
    status: GAME_OVER,
    computer,
    player,
  };

  it('should STARTED', () => {
    const initialState = { game, history: [] };
    const hook = {
      [STARTED]: getState => {
        const {
          game: { status },
        } = getState();
        expect(status).toEqual(GAME_STARTED);
      },
    };
    const store = configureStore(initialState, hook);
    store.dispatch(startGameAction());
  });

  it.only('should PLAYED', () => {
    const initialState = { game, history: [] };
    const newBoard = ['x', null, null, null, null, null, null, null, null];
    const hook = {
      [PLAYED]: getState => {
        const {
          game: { board },
        } = getState();
        expect(board).toEqual(newBoard);
      },
    };
    const store = configureStore(initialState, hook);
    store.dispatch(manageGame(newBoard));
  });

  it('should PLAYER_CHANGED', () => {
    const initialState = { game, history: [] };
    const newBoard = ['x', null, null, null, null, null, null, null, null];
    const hook = {
      [PLAYER_CHANGED]: getState => {
        const {
          game: { currentPlayer },
        } = getState();
        expect(currentPlayer).toEqual(computer);
      },
    };
    const store = configureStore(initialState, hook);
    store.dispatch(manageGame(newBoard));
  });

  it('should ENDED', () => {
    const initialState = { game, history: [] };
    const newBoard = ['x', 'x', 'x', 'x', 'x', 'o', 'o', 'o', 'o'];
    const hook = {
      [ENDED]: getState => {
        const {
          game: { status },
        } = getState();
        expect(status).toBe(GAME_OVER);
      },
    };
    const store = configureStore(initialState, hook);
    store.dispatch(manageGame(newBoard));
  });
});
