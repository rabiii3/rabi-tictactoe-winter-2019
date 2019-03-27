import React from 'react';
import { shallow } from 'enzyme';
import ComputerPlayButton from '..';
import { GAME_OVER, X } from '../../../game';

describe('ComputerPlayButton', () => {
  it('should render', () => {
    const props = {
      onClick: jest.fn,
      currentPlayer: { name: 'test', piece: X },
      status: GAME_OVER,
    };
    const root = <ComputerPlayButton {...props} />;
    const wrapped = shallow(root);
    expect(wrapped).toMatchSnapshot();
  });
});
