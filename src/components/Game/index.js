import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import HistoryPanel from '../HistoryPanel';
import BoardPanel from '../BoardPanel';
import ChartPanel from '../ChartPanel';
import { playerPlay } from '../../actions/game';
import { getCappedHistory, getBoard, getCurrentPlayer, getStatus } from '../../selectors';

const mapStateToProps = state => ({
  currentPlayer: getCurrentPlayer(state),
  history: getCappedHistory(state),
  status: getStatus(state),
  board: getBoard(state),
});

const mapDispatchToProps = dispatch => ({
  playerPlay: index => dispatch(playerPlay(index)),
});

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const Game = ({ history, board, currentPlayer, status, playerPlay }) => (
  <Grid item>
    <Grid container direction="row" justify="space-around" alignItems="flex-start" wrap="nowrap">
      <Grid item>
        <ChartPanel history={history} />
      </Grid>
      <Grid item>
        <BoardPanel board={board} currentPlayer={currentPlayer} status={status} onClick={playerPlay} />
      </Grid>
      <Grid item>
        <HistoryPanel history={history} status={status} />
      </Grid>
      <Grid item />
    </Grid>
  </Grid>
);

Game.propTypes = {
  currentPlayer: PropTypes.object,
  history: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  board: PropTypes.array.isRequired,
  playerPlay: PropTypes.func.isRequired,
};

export default enhance(Game);
