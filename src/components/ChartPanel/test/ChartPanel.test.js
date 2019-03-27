import React from 'react';
import { shallow } from 'enzyme';
import ChartPanel from '..';
import { X, O } from '../../../game';

describe('ChartPanel', () => {
  it('should render', () => {
    const player = { name: 'player', isComputer: false, piece: O };
    const computer = { name: 'computer', isComputer: true, piece: X };
    const history = [{ id: 1, winner: player }, { id: 2, winner: computer }, { id: 3, winner: player }, { id: 4 }];
    const root = <ChartPanel history={history} />;
    const wrapped = shallow(root);
    expect(wrapped).toMatchSnapshot();
  });
});
