import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../components/Auth';

const withAuth = () => Component => {
  const AuthComponent = ({ user, onAuth, ...rest }) => {
    return (
      <Auth user={user} onAuth={onAuth}>
        <Component {...rest} />
      </Auth>
    );
  };

  AuthComponent.propTypes = {
    user: PropTypes.string,
    onAuth: PropTypes.func.isRequired,
  };

  return AuthComponent;
};

export default withAuth;
