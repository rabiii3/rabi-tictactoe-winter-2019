import { createSelector } from 'reselect';
import { prop, compose, reverse, slice } from 'ramda';
import { getNextPlayer } from '../game';

const getRoot = prop('history');
export const getCappedHistory = createSelector(
  getRoot,
  history => reverse(slice(-6, history.length, history)),
);

const getGame = prop('game');
export const getBoard = createSelector(
  getGame,
  game => prop('board', game),
);
export const getStatus = createSelector(
  getGame,
  game => prop('status', game),
);
export const getCurrentPlayer = createSelector(
  getGame,
  game => prop('currentPlayer', game),
);
export const getComputer = createSelector(
  getGame,
  game => prop('computer', game),
);
export const getPlayer = createSelector(
  getGame,
  game => prop('player', game),
);

// export const getCurrentPlayer = createSelector(getGame, getBoard, getPlayer, getComputer,
//   (game, _, player, computer) => getNextPlayer(prop('currentPlayer', game), player, computer));
