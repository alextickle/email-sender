import Main from '../components/Main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import loginOperations from '../state/ducks/login/operations';

const mapStateToProps = state => ({
  userId: state.login.userId
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
