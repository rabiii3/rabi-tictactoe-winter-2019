import axios from 'axios';
import { prop } from 'ramda';

const SERVER_URL = 'http://rp5.redpelicans.com:8888/api'; //'http://tictactoe-api.staging.redpelicans.com:80/api'; 
const getComputerPlayURL = () => `${SERVER_URL}/computer/play`; //'http://localhost:8080/api/computer/play';
const getHasAWinnerURL = () => `${SERVER_URL}/game/hasawinner`; //'http://localhost:8080/api/game/hasawinner;'
const getFruitIconURL = () => 'http://fruits.staging.redpelicans.com/api/fruits'; //'http://localhost:8080/api/fruits';

export const requestComputerPlay = body => axios.post(getComputerPlayURL(), body).then(prop('data'));
export const hasAWinner = body => axios.post(getHasAWinnerURL(), body).then(prop('data'));
export const getOneFruit = () => axios.post(getFruitIconURL()).then(prop('data'));
