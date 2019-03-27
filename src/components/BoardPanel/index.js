import React from 'react';
import PropTypes from 'prop-types';
import { map, addIndex } from 'ramda';
import { pure } from 'recompose';
import { Grid, Typography, withStyles } from '@material-ui/core';
import { GAME_STARTED, isFruit } from '../../game';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 300,
    width: 300,
    border: '1px solid black',
    borderWidth: '0 1px 1px 0',
    flexWrap: 'wrap',
  },
  square: {
    width: '33.336%',
    height: 100,
    border: '1px solid black',
    borderWidth: ' 1px 0 0 1px',
    textAlign: 'center',
    lineHeight: 6.7,
  },
};

const DeadCell = () => <div style={styles.square} />;

const PlayedCell = ({ piece }) => <div style={styles.square}>{piece}</div>;

PlayedCell.propTypes = {
  piece: PropTypes.string,
};

const ClickableCell = ({ onClick }) => <div style={styles.square} onClick={onClick} />;

ClickableCell.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Fruit = ({ piece }) => {
  const { icon, color } = piece;
  return (
    <div style={styles.square}>
      <i className={`fa fa-${icon}`} style={{ color }} />
    </div>
  );
};

Fruit.propTypes = {
  piece: PropTypes.object,
};

const Cell = ({ currentPlayer, piece, onClick }) => {
  if (isFruit(piece)) return <Fruit piece={piece} />;
  if (!piece) {
    if (currentPlayer.isComputer) return <DeadCell />;
    return <ClickableCell onClick={onClick} />;
  }
  return <PlayedCell piece={piece} />;
};

Cell.propTypes = {
  currentPlayer: PropTypes.object.isRequired,
  piece: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

const PureCell = React.memo(Cell);
//const PureCell = pure(Cell);

const BoardPanel = ({ board, currentPlayer, status, onClick, classes }) => {
  const mapIndex = addIndex(map);
  return (
    <Grid container direction="column" justify="space-around" spacing={16}>
      <Grid item>
        <Typography variant="h6" gutterBottom align="center">
          {status === GAME_STARTED && currentPlayer ? 'Current Player: ' + currentPlayer.name : 'GAME OVER'}
        </Typography>
      </Grid>
      <Grid item>
        <div className={classes.container}>
          {mapIndex(
            (cell, i) => (
              <PureCell key={i} currentPlayer={currentPlayer} piece={cell} status={status} onClick={() => onClick(i)} />
            ),
            board,
          )}
        </div>
      </Grid>
    </Grid>
  );
};

BoardPanel.propTypes = {
  board: PropTypes.array.isRequired,
  currentPlayer: PropTypes.object,
  status: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(BoardPanel);
