import React from 'react';
import { shallow } from 'enzyme';
import BoardPanel from '..';
import { X, O, GAME_STARTED } from '../../../game';

describe('BoardPanel', () => {
  it('should render', () => {
    const props = {
      board: [null, X, O],
      currentPlayer: { name, isComputer: false, piece: O },
      onClick: jest.fn,
      status: GAME_STARTED,
    };
    const root = <BoardPanel {...props} />;
    const wrapped = shallow(root);
    expect(wrapped).toMatchSnapshot();
  });
});
