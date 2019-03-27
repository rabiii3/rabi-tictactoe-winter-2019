import { STARTED, PLAYED, PLAYER_CHANGED, ENDED } from '../actions/game';
import { CELL_FRUIT_LOADED } from '../actions/fruit';
import { updateFruitBoard } from '../game';

export default (state = {}, action) => {
  var i = 0;
  switch (action.type) {
    case STARTED:
      return { ...state, ...action.payloads };
    case PLAYED:
      return { ...state, ...action.payloads };
    case PLAYER_CHANGED:
      return { ...state, ...action.payloads };
    case ENDED: {
      const { status } = action.payloads;
      return { ...state, status };
    }
    case CELL_FRUIT_LOADED: {
      const { board } = state;
      const { index, fruit } = action;
      return { ...state, board: updateFruitBoard(board, index, fruit) };
    }
    default:
      return state;
  }
};
