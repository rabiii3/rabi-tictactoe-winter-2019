import { find, times } from 'ramda';
import { requestComputerPlay } from '../request';

describe('request computer play', () => {
  it('should return cell', () => {
    const board = times(() => null, 9);
    requestComputerPlay({ board, computer: 'x', player: 'o' }).then(() => expect(find('x', board)).toBeFalsy());
  });
});
