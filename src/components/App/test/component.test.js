import React from 'react';
import { shallow, mount } from 'enzyme';
import Component from '../component';
//import sinon from 'sinon';
import { X, O, GAME_OVER } from '../../../game';

describe('App|Component', () => {
  xit('should render', () => {
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
      startGame: jest.fn,
      computerPlay: jest.fn,
      handlePlay: jest.fn,
      onClick: jest.fn,
    };
    const root = <Component {...state} />;
    const wrapper = shallow(root);
    expect(wrapper).toMatchSnapshot();
  });

  xit('should start game', () => {
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
      startGame: jest.fn(),
      computerPlay: jest.fn(),
      handlePlay: jest.fn(),
      onClick: jest.fn(),
    };
    const root = <Component {...state} />;
    const wrapper = mount(root);
    wrapper.find('#startButton').simulate('click');
    expect(state.startGame).toHaveBeenCalledTimes(1);
  });
});
