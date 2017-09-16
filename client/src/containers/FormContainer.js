import Form from '../routes/Form';
import { connect } from 'react-redux';
import formOperations from '../state/ducks/form/operations';

const mapStateToProps = state => ({
  isFetching: state.form.isFetching,
  email: state.form.email,
  message: state.form.message,
  name: state.form.name,
  userEmail: state.login.userEmail
});

const mapDispatchToProps = {
  send: formOperations.send,
  handleChange: formOperations.handleChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
