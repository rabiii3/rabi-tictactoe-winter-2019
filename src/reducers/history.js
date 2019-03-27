import { append, prop } from 'ramda';
import { ENDED } from '../actions/game';

export default (state = [], { type, payloads }) => {
  switch (type) {
    case ENDED: {
      const { result, player, computer } = payloads;
      const winner = result ? (result === prop('piece', player) ? player : computer) : null;
      return append({ id: state.length + 1, winner }, state);
    }
    default:
      return state;
  }
};
