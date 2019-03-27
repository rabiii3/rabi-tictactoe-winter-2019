import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.dev';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/App/';
import { X, O, GAME_OVER, getNewBoard } from './game';

const { pathname } = document.location;
//const name = pathname.slice(1) || null;
const name = window.location.hash.slice(1) || null;
const player = { name, isComputer: false, piece: O };
const board = getNewBoard();
const computer = { name: 'computer', isComputer: true, piece: X };
const history = [{ id: 1, winner: player }, { id: 2, winner: computer }, { id: 3, winner: player }, { id: 4 }];

const initialState = {
  history,
  game: {
    board,
    currentPlayer: player,
    status: GAME_OVER,
    computer,
    player,
  },
};

export const store = configureStore(initialState);

const theme = createMuiTheme({});

const browserHistory = createBrowserHistory();

const ROOT = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(ROOT, document.getElementById('root'));
