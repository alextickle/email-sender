import React from 'react';
import { Link } from 'react-router-dom';

const Form = props => (
  <div>
    <div>Form</div>
    <form
      onSubmit={e =>
        props.send(e, {
          subject: props.name,
          sender: props.userEmail,
          recipient: props.email,
          content: props.message,
          user_id: props.user_id
        })}
    >
      <input
        placeholder="name"
        type="text"
        name="name"
        value={props.name}
        onChange={props.handleChange}
      />
      <input
        placeholder="email address"
        name="email"
        type="text"
        value={props.email}
        onChange={props.handleChange}
      />
      <input
        placeholder="message"
        type="text"
        name="message"
        type="text"
        value={props.message}
        onChange={props.handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
    {props.status}
    <Link to="/messages">
      <button onClick={() => props.fetchMessages(props.id)}>
        View Messages
      </button>
    </Link>
    <button onClick={props.logout}>Logout</button>
  </div>
);

export default Form;
