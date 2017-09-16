import React from 'react';

const Login = props => (
  <div>
    <div>Log In</div>
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        props.login().then(resp => props.setUser(resp.email));
      }}
    >
      <input
        placeholder="email address"
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
