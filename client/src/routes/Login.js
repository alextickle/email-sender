import React from 'react';
import styles from '../styles';

const Login = props => (
  <div style={styles.base}>
    <div style={styles.title}>Log In</div>
    <form onSubmit={e => props.login(e, props.email, props.password)}>
      <input
        placeholder="email address"
        type="text"
        name="email"
        value={props.email}
        onChange={props.handleChange}
        style={styles.input}
      />
      <br />
      <input
        placeholder="password"
        type="password"
        name="password"
        value={props.password}
        onChange={props.handleChange}
        style={styles.input}
      />
      <br />
      <div style={styles.status}>{props.status}</div>
      <div style={styles.submit}>
        <input style={styles.button} type="submit" value="Submit" />
      </div>
    </form>
  </div>
);

export default Login;
