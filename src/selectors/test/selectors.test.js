import { getCappedHistory, getBoard, getCurrentPlayer, getStatus, getComputer, getPlayer } from '../index';
import { GAME_OVER, X, O } from '../../game';

describe('history Selectors', () => {
  it('should return history state', () => {
    const state = {
      game: {},
      history: [{ id: 1, winner: 'player' }],
    };
    expect(getCappedHistory(state)).toEqual([{ id: 1, winner: 'player' }]);
  });

  it('should return reverse history list', () => {
    const state = {
      game: {},
      history: [{ id: 1, winner: 'player' }, { id: 2, winner: 'computer' }],
    };
    expect(getCappedHistory(state)).toEqual([{ id: 2, winner: 'computer' }, { id: 1, winner: 'player' }]);
  });

  it('should return first 4 history items ', () => {
    const state = {
      game: {},
      history: [
        { id: 2, winner: 'computer' },
        { id: 3, winner: 'player' },
        { id: 4, winner: 'player' },
        { id: 5, winner: 'tie' },
      ],
    };
    expect(getCappedHistory(state)).toEqual([
      { id: 5, winner: 'tie' },
      { id: 4, winner: 'player' },
      { id: 3, winner: 'player' },
      { id: 2, winner: 'computer' },
    ]);
  });
});

describe('board selector', () => {
  it('should return board', () => {
    const state = {
      game: { board: ['x'] },
      history: [],
    };
    expect(getBoard(state)).toEqual(['x']);
  });
});

describe('currentPlayer selector', () => {
  it('should return current player: computer', () => {
    const state = {
      game: { currentPlayer: 'computer' },
      history: [],
    };
    expect(getCurrentPlayer(state)).toEqual('computer');
  });
});

describe('getStatus selector', () => {
  it('should return GAME OVER', () => {
    const state = {
      game: { status: GAME_OVER },
      history: [],
    };
    expect(getStatus(state)).toEqual(GAME_OVER);
  });
});

describe('getComputer selector', () => {
  it('should return computer', () => {
    const state = {
      game: { computer: { name: 'computer', isComputer: true, piece: X } },
      history: [],
    };
    expect(getComputer(state)).toEqual({ name: 'computer', isComputer: true, piece: X });
  });
});

describe('getPlayer selector', () => {
  it('should return player', () => {
    const state = {
      game: { player: { name: 'player', piece: O } },
      history: [],
    };
    expect(getPlayer(state)).toEqual({ name: 'player', piece: O });
  });
});
