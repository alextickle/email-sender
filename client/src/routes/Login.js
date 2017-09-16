import React from 'react';

const Login = props => (
  <div>
    <div>Log In</div>
    <form onSubmit={e => props.login(e, props.email, props.password)}>
      <input
        placeholder="email address"
        type="text"
        name="email"
        value={props.email}
        onChange={props.handleChange}
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        value={props.password}
        onChange={props.handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Login;
