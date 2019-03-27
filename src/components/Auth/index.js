import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import FinalLoginForm from '../FinalLoginForm';

const Auth = ({ user, onAuth, children }) => (user ? children : <LoginForm onAuth={onAuth} />);

Auth.propTypes = {
  user: PropTypes.string,
  onAuth: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Auth;
