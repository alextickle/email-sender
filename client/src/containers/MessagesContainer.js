import Messages from '../routes/Messages';
import { connect } from 'react-redux';
import messagesOperations from '../state/ducks/messages/operations';

const mapStateToProps = state => ({
  loading: state.messages.loading
  messages: state.messages.messages,
  userEmail: state.user.email
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
