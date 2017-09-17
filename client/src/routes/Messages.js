import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles';

const Messages = props => {
  if (props.loading) {
    return <h1>Loading...</h1>;
  }
  let mapped = props.messages.map((message, i) => (
    <div style={styles.messageBox} key={i}>
      <div style={styles.meta}>
        <div>
          <b>To</b>: {message.recipient}
        </div>
        <div>
          <b>From</b>: {props.userEmail}
        </div>
        <div>
          <b>Subject</b>: {message.subject}
        </div>
        <div>
          <b>Sent</b>: {new Date(message.createdAt).toString()}
        </div>
      </div>
      <div style={styles.message}>{message.content}</div>
    </div>
  ));
  return (
    <div style={styles.base}>
      <div style={styles.title}>Messages</div>
      {mapped.length === 0 ? <p>No sent messages</p> : mapped.reverse()}
      <Link to="/form">Back to form</Link>
    </div>
  );
};

export default Messages;
