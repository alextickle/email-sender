import Login from '../routes/Login';
import { connect } from 'react-redux';
import loginOperations from '../state/ducks/login/operations';

const mapStateToProps = state => ({
  email: state.login.email,
  password: state.login.password,
  status: state.login.status
});

const mapDispatchToProps = {
  login: loginOperations.login,
  handleChange: loginOperations.handleChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
