import Messages from '../routes/Messages';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loading: state.messages.loading,
  messages: state.messages.messages,
  userEmail: state.user.email
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
