import React from 'react';

const Form = props => (
  <div>
    <div>Form</div>
    <form onSubmit={e => props.send(e, props.name, props.email, props.message)}>
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
  </div>
);

export default Form;
