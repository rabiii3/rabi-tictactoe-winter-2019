import React from 'react';
import PropTypes from 'prop-types';
import { reduce, propOr } from 'ramda';
import { pure } from 'recompose';
import { Grid, Typography, withStyles } from '@material-ui/core';
import C3Chart from 'react-c3js';

const styles = {
  root: {
    height: 400,
    width: 400,
  },
};

const computerWins = history =>
  reduce((acc, round) => (round.winner && round.winner.isComputer ? acc + 1 : acc), 0, history);
const playerWins = history =>
  reduce((acc, round) => (round.winner && !round.winner.isComputer ? acc + 1 : acc), 0, history);
const draw = history => reduce((acc, round) => (propOr(false, 'winner', round) ? acc : acc + 1), 0, history);

const data = history => ({
  columns: [['Player', playerWins(history)], ['Computer', computerWins(history)], ['tie', draw(history)]],
  type: 'pie',
});

const ChartPanel = ({ history, classes }) => (
  <Grid container direction="column" className={classes.root}>
    <Grid item>
      <Typography variant="h6" gutterBottom align="center">
        Player: {playerWins(history)} | Computer: {computerWins(history)} | Tie: {draw(history)}
      </Typography>
    </Grid>
    <Grid item>
      <C3Chart data={data(history)} />
    </Grid>
  </Grid>
);

ChartPanel.propTypes = {
  history: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

const PureChartPanel = pure(ChartPanel);

export default withStyles(styles)(PureChartPanel);
