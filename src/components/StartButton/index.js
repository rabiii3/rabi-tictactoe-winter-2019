import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import { Button } from '@material-ui/core';
import { GAME_OVER } from '../../game';
import { withRouter } from 'react-router-dom';

const isGameOver = (status, path) => status !== GAME_OVER || path !== '/';

const StartButton = ({ history, status, onClick }) => (
  <Button id="startButton" onClick={onClick} disabled={isGameOver(status, history.location.pathname)}>
    Start Game
  </Button>
);

StartButton.propTypes = {
  history: PropTypes.object.isRequired,
  status: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const PureStartButton = pure(StartButton);

export default withRouter(PureStartButton);
