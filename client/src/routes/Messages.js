import React from 'react';
import { Link } from 'react-router-dom';

const Messages = props => {
  if (props.loading) {
    return <h1>Loading...</h1>;
  }
  let mapped = props.messages.map((message, i) => (
    <div key={i}>
      <div>To: {message.recipient}</div>
      <div>From: {props.userEmail}</div>
      <div>Subject: {message.subject}</div>
      <div>{message.createdAt}</div>
      <div>{message.content}</div>
    </div>
  ));
  return (
    <div>
      {mapped.reverse()}
      <Link to="/form">Back to form</Link>
    </div>
  );
};

export default Messages;
