import React from 'react';
import { enhance } from '..';
import { mount } from 'enzyme';
import { GAME_OVER, X, O, GAME_STARTED, randomPlayer } from '../../../game';

describe('App', () => {
  xit('should render', () => {
    const Component = () => <div />;
    const EnhancedComponent = enhance(Component);
    const name = 'test';
    const player = { name, isComputer: false, piece: O };
    const computer = { name: 'computer', isComputer: true, piece: X };
    const board = [X, O, X, null, null, X, O, null, null];
    const history = [{ id: 1, winner: player }, { id: 2, winner: computer }, { id: 3, winner: player }, { id: 4 }];
    const state = {
      currentPlayer: player,
      player,
      computer,
      board,
      history,
      status: GAME_OVER,
    };
    const root = mount(<EnhancedComponent {...state} />);
    expect(root).toMatchSnapshot();
  });
});
