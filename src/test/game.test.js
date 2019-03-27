import {
  isBoardFull,
  getStatus,
  getNewComputerBoard,
  getNewBoard,
  getFirstAvailableCell,
  updateBoard,
  getNextPlayer,
  randomPlayer,
  GAME_OVER,
  GAME_STARTED,
  X,
  O,
} from '../game';

Math.random = () => 1;

describe('game', () => {
  describe('isBoardFull', () => {
    it('should be full', () => {
      const board = ['O', 'X', 'X'];
      expect(isBoardFull(board)).toBeTruthy();
    });

    it('should not be full', () => {
      const board = ['O', 'X', null];
      expect(isBoardFull(board)).toBeFalsy();
    });
  });

  describe('getStatus', () => {
    it('should be GAME_OVER', () => {
      const board = ['X', 'X', 'X'];
      expect(getStatus(board)).toBe(GAME_OVER);
    });

    it('should be GAME_STARTED', () => {
      const board = ['X', null, 'X'];
      expect(getStatus(board)).toBe(GAME_STARTED);
    });
  });

  describe('getNewComputerBoard', () => {
    it('should add element', () => {
      const board = ['X', null, 'O'];
      const player = { name: 'player', piece: 'X' };
      expect(getNewComputerBoard(board, player)).toEqual(['X', 'X', 'O']);
    });
  });

  describe('getNewBoard', () => {
    it('should return empty board', () => {
      const emptyBoard = [null, null, null, null, null, null, null, null, null];
      expect(getNewBoard()).toEqual(emptyBoard);
    });
  });

  describe('getFirstAvailableCell', () => {
    it('should return first empty index', () => {
      const board = [X, X, O, null];
      expect(getFirstAvailableCell(board)).toBe(3);
    });
  });

  describe('updateBoard', () => {
    const board = [X, null, null];
    const player = { name: 'player', isComputer: false, piece: O };
    const computer = { name: 'computer', isComputer: true, piece: X };

    it('should update inserted index with player piece', () => {
      expect(updateBoard(board, 2, player)).toEqual([X, null, O]);
    });

    it('should update inserted index with computer piece', () => {
      expect(updateBoard(board, 2, computer)).toEqual([X, null, X]);
    });
  });

  describe('getNextPlayer', () => {
    const player = { name: 'player' };
    const computer = { name: 'computer', isComputer: true };

    it('should return player', () => {
      const currentPlayer = computer;
      expect(getNextPlayer(currentPlayer, player, computer)).toBe(player);
    });

    it('should return computer', () => {
      const currentPlayer = player;
      expect(getNextPlayer(currentPlayer, player, computer)).toBe(computer);
    });
  });

  describe('randomPlayer', () => {
    const player = { name: 'player' };
    const computer = { name: 'computer' };

    it('should return player or computer', () => {
      expect(randomPlayer(player, computer)).toBe(computer);
    });
  });
});
