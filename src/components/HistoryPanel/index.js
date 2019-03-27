import React from 'react';
import PropTypes from 'prop-types';
import { map, head } from 'ramda';
import { pure } from 'recompose';
import { Grid, Table, TableBody, TableRow, TableCell, Typography, withStyles } from '@material-ui/core';

const styles = {
  container: {
    width: 350,
    height: 350,
  },
};

const HistoryPanel = ({ history, classes }) => {
  //const round = propOr(0, 'length', history);
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <Status round={head(history)} />
      </Grid>
      <Grid item>
        <History history={history} />
      </Grid>
    </Grid>
  );
};

HistoryPanel.propTypes = {
  history: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

const PureHistoryPanel = pure(HistoryPanel);

const Status = ({ round }) => (
  <Typography variant="h6" gutterBottom align="center">
    Round: {round.id + 1}
  </Typography>
);

Status.propTypes = {
  round: PropTypes.object.isRequired,
};

const History = ({ history }) => (
  <Table>
    <TableBody>
      {map(
        round => (
          <Round round={round} key={round.id} />
        ),
        history,
      )}
    </TableBody>
  </Table>
);

History.propTypes = {
  history: PropTypes.array.isRequired,
};

const Round = ({ round }) =>
  round.winner ? <WinnedRound id={round.id} winner={round.winner} /> : <TiedRound id={round.id} />;

Round.propTypes = {
  round: PropTypes.object.isRequired,
};

const WinnedRound = ({ id, winner }) => (
  <TableRow>
    <TableCell>{id}</TableCell>
    <TableCell>{winner.name}</TableCell>
  </TableRow>
);

WinnedRound.propTypes = {
  id: PropTypes.number.isRequired,
  winner: PropTypes.object.isRequired,
};

const TiedRound = ({ id }) => (
  <TableRow>
    <TableCell>{id}</TableCell>
    <TableCell>No Winner</TableCell>
  </TableRow>
);

TiedRound.propTypes = {
  id: PropTypes.number.isRequired,
};

export default withStyles(styles)(PureHistoryPanel);
