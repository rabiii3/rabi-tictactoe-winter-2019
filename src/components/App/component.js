import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Typography, withStyles } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';
import Header, { HeaderLeft, HeaderRight, Nav } from '../Header';
import StartButton from '../StartButton';
import Game from '../Game';
import About from '../About';
import Help from '../Help';

const styles = {
  head:{
    width: '100%'
  },
  body:{
    width: 1200,
    height: 450,
    padding: 50,
  },
  startBTN: {
    MarginRight: 300,
  }
}

const Component = ({ status, startGame, classes }) => (
  <Grid container direction="column" justify="space-around" alignItems="center" wrap="nowrap" spacing={40}>
    <Grid item className={classes.head}>
      <Header>
        <HeaderLeft>
          <Typography variant="h5" color="inherit" className="header-left">TicTacToe</Typography>
        </HeaderLeft>
        <HeaderRight className={classes.startBTN}>
          <StartButton status={status} onClick={startGame} />
        </HeaderRight>
        <Nav>
          <label> <Link style={{color:"white"}} to="/">Game</Link> </label>
          <label> <Link style={{color:"white"}} to={{ pathname:'/about',}}>About</Link> </label>
          <label> <Link style={{color:"white"}} to="/help">Help</Link> </label>
        </Nav>
      </Header>
    </Grid>
    <Grid item>
      <Paper className={classes.body}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route path="/" component={Game} />
        </Switch>
      </Paper>
    </Grid>
  </Grid>
);

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default withStyles(styles)(Component);
