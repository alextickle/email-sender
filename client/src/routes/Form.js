import React from 'react';
import { Link } from 'react-router-dom';

const Form = props => (
  <div>
    <div>Form</div>
    <form
      onSubmit={e =>
        props.send(e, props.name, props.email, props.userEmail, props.message)}
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
    <Link to="/messages">
      <button onClick={props.getMessages}>View Messages</button>
    </Link>
  </div>
);

export default Form;
