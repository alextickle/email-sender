import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles';

const Form = props => (
  <div style={styles.base}>
    <div style={styles.title}>Send Message</div>
    <form
      onSubmit={e =>
        props.send(e, {
          subject: props.name,
          sender: props.userEmail,
          recipient: props.email,
          content: props.message,
          user_id: props.id
        })}
    >
      <input
        placeholder="name / subject"
        type="text"
        name="name"
        value={props.name}
        onChange={props.handleChange}
        style={styles.input}
      />
      <br />
      <input
        placeholder="email address"
        name="email"
        type="text"
        value={props.email}
        onChange={props.handleChange}
        style={styles.input}
      />
      <br />
      <textarea
        placeholder="message"
        name="message"
        rows={5}
        value={props.message}
        onChange={props.handleChange}
      />
      <br />
      <div style={styles.status}>{props.status}</div>
      <div style={styles.submit}>
        <input style={styles.button} type="submit" value="Submit" />
      </div>
    </form>

    <div>
      <Link to="/messages">
        <button
          style={styles.button}
          onClick={() => props.fetchMessages(props.id)}
        >
          View Messages
        </button>
      </Link>
      <button onClick={props.logout}>Logout</button>
    </div>
  </div>
);

export default Form;
