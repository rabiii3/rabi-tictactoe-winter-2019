import { connect } from 'react-redux';
import App from './component';
import { startGameAction } from '../../actions/game';
import { getStatus } from '../../selectors';

const mapStateToProps = state => ({
  status: getStatus(state),
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGameAction()),
});

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhance(App);
