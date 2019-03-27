import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '..';

describe('LoginForm', () => {
  it('should render', () => {
    const root = <LoginForm onAuth={jest.fn} />;
    const wrapped = shallow(root);
    expect(wrapped).toMatchSnapshot();
  });
});
