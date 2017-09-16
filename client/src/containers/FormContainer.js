import Form from '../routes/Form';
import { connect } from 'react-redux';
import formOperations from '../state/ducks/form/operations';
import userOperations from '../state/ducks/user/operations';
import messagesOperations from '../state/ducks/messages/operations';

const mapStateToProps = state => ({
  loading: state.form.loading,
  email: state.form.email,
  message: state.form.message,
  name: state.form.name,
  status: state.form.status,
  userEmail: state.user.email,
  id: state.user.id
});

const mapDispatchToProps = {
  send: formOperations.send,
  handleChange: formOperations.handleChange,
  logout: userOperations.logout,
  fetchMessages: messagesOperations.fetchMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
