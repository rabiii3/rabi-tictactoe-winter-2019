import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { GAME_OVER } from '../../game';

const isStatusOver = status => status === GAME_OVER;

const ComputerPlayButton = ({ status, onClick, children, currentPlayer }) => (
  <Button onClick={onClick} disabled={isStatusOver(status) || !currentPlayer.isComputer}>
    {children}
  </Button>
);

ComputerPlayButton.propTypes = {
  status: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPlayer: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default ComputerPlayButton;
