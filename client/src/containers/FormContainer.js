import Form from '../routes/Form';
import { connect } from 'react-redux';
import formOperations from '../state/ducks/form/operations';
import userOperations from '../state/ducks/user/operations';

const mapStateToProps = state => ({
  loading: state.form.loading,
  email: state.form.email,
  message: state.form.message,
  name: state.form.name,
  userEmail: state.user.email
});

const mapDispatchToProps = {
  send: formOperations.send,
  handleChange: formOperations.handleChange,
  logout: userOperations.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
