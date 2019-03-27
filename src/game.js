import { indexOf, update, propOr } from 'ramda';

export const X = 'x';

export const O = 'o';

export const GAME_OVER = 'GAME_OVER';

export const GAME_STARTED = 'GAME_STARTED';

export const isBoardFull = board => indexOf(null, board) < 0;

export const getStatus = board => (isBoardFull(board) ? GAME_OVER : GAME_STARTED);

export const getNewComputerBoard = (board, computer) => update(indexOf(null, board), computer.piece, board);

export const getNewBoard = () => [null, null, null, null, null, null, null, null, null];

export const getFirstAvailableCell = board => indexOf(null, board);

export const updateBoard = (board, index, currentPlayer) =>
  isBoardFull(board) ? board : update(index, currentPlayer.piece, board);

export const getNextPlayer = (currentPlayer, player, computer) => (currentPlayer.isComputer ? player : computer);

const random = () => Math.round(Math.random());

export const randomPlayer = (player, computer) => {
  const players = [player, computer];
  return players[random()];
};

export const updateFruitBoard = (board, index, icon) => update(index, icon, board);

export const isFruit = piece => (piece != null && propOr(false, 'icon', piece) ? true : false);
