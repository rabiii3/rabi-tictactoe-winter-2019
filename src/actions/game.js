import { GAME_STARTED, getNewBoard, getNextPlayer, updateBoard, GAME_OVER, isBoardFull, randomPlayer } from '../game';
import { requestComputerPlay, hasAWinner } from '../request';
import { loadFruits } from './fruit';

export const STARTED = 'STARTED';
export const PLAYED = 'PLAYED';
export const PLAYER_CHANGED = 'PLAYER_CHANGED';
export const ENDED = 'ENDED';

export const startGameAction = () => (dispatch, getState) => {
  const {
    game: { player, computer },
  } = getState();
  dispatch({
    type: STARTED,
    payloads: {
      board: getNewBoard(),
      status: GAME_STARTED,
      currentPlayer: randomPlayer(player, computer),
    },
  });
  const {
    game: { currentPlayer },
  } = getState();
  if (currentPlayer.isComputer) dispatch(computerPlay());
};

export const playerPlay = index => (dispatch, getState) => {
  const {
    game: { board, currentPlayer },
  } = getState();
  const newBoard = updateBoard(board, index, currentPlayer);
  dispatch(manageGame(newBoard));
};

const computerPlay = () => (dispatch, getState) => {
  const {
    game: { board, currentPlayer, player, computer },
  } = getState();
  return requestComputerPlay({ board, computer: computer.piece, player: player.piece }).then(({ move }) => {
    const newBoard = updateBoard(board, move, currentPlayer);
    setTimeout(() => dispatch(manageGame(newBoard)), 1000);
  });
};

export const manageGame = newBoard => (dispatch, getState) => {
  dispatch({
    type: PLAYED,
    payloads: {
      board: newBoard,
    },
  });

  const {
    game: { board, currentPlayer, player, computer },
  } = getState();
  hasAWinner({ board }).then(({ winner }) => {
    if (winner || isBoardFull(board)) {
      dispatch(loadFruits()).then(() =>
        dispatch({
          type: ENDED,
          payloads: {
            result: winner,
            player,
            computer,
            status: GAME_OVER,
          },
        }),
      );
    } else {
      dispatch({
        type: PLAYER_CHANGED,
        payloads: {
          currentPlayer: getNextPlayer(currentPlayer, player, computer),
        },
      });

      const {
        game: { currentPlayer: cp },
      } = getState();
      console.log('======currennt player :', cp);
      if (cp.isComputer) dispatch(computerPlay());
    }
  });
};
