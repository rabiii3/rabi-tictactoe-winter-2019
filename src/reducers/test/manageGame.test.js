import { hasAWinner, requestComputerPlay } from '../../request';
import { ENDED, PLAYED, PLAYER_CHANGED, manageGame } from '../../actions/game';
import { GAME_OVER, GAME_STARTED } from '../../game';
import configureStore from '../../store/configureStoreTest';

jest.mock('../../request', () => ({
  hasAWinner: ({ board }) => (board[0] === 'x' ? Promise.resolve({ winner: 'x' }) : Promise.resolve({})),
  requestComputerPlay: ({ board, computer, player }) => Promise.resolve({ move: 1 }),
}));

describe('manageGame', () => {
  it('should have a winner', done => {
    const player = { name: 'player', piece: 'o' };
    const computer = { name: 'computer', isComputer: true, piece: 'x' };
    const game = { player, computer };
    const board = ['x', null];
    const initialState = { game, history: [] };
    const hook = {
      [ENDED]: getState => {
        const {
          game: { status },
        } = getState();
        expect(status).toEqual(GAME_OVER);
        done();
      },
    };
    const store = configureStore(initialState, hook);
    store.dispatch(manageGame(board));
  });

  it('should change player', done => {
    const board = [null];
    const player = { name: 'player', piece: 'o' };
    const computer = { name: 'computer', isComputer: true, piece: 'x' };
    const game = {
      board,
      player,
      computer,
      currentPlayer: computer,
    };
    const initialState = { game, history: [] };
    const hook = {
      [PLAYER_CHANGED]: getState => {
        const {
          game: { currentPlayer },
        } = getState();
        expect(currentPlayer).toEqual(player);
        done();
      },
    };
    const store = configureStore(initialState, hook);
    store.dispatch(manageGame(board));
  });

  it('should let computer play', done => {
    const board = [null, null];
    const player = { name: 'player', piece: 'o' };
    const computer = { name: 'computer', isComputer: true, piece: 'x' };
    const game = {
      player,
      computer,
      currentPlayer: player,
    };
    const initialState = { game, history: [] };
    const hook = {
      [PLAYER_CHANGED]: getState => {
        const {
          game: { currentPlayer },
        } = getState();
        expect(currentPlayer).toEqual(computer);
        done();
      },
      [PLAYED]: getState => {
        const {
          game: { board },
        } = getState();
        expect(board).toEqual(['x', null]);
        done();
      },
    };
    const store = configureStore(initialState, hook);
    store.dispatch(manageGame(board));
  });
});
