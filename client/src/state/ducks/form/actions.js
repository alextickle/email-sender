import types from './types';
const sgMail = require('@sendgrid/mail');
const apiUrl =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:4000/';

export const handleChange = e => {
  return {
    type: types.HANDLE_CHANGE,
    field: e.target.name,
    value: e.target.value
  };
};

export const reset = () => {
  return {
    type: types.RESET
  };
};

export const initSend = () => {
  return {
    type: types.INIT_LOGIN
  };
};

export const sendSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS
  };
};

export const sendFailure = error => {
  return {
    type: types.LOGIN_FAILURE,
    error: error
  };
};

export const send = (e, subject, to, from, content, user_id) => {
  e.preventDefault();
  return dispatch => {
    dispatch(initSend());
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: to
      from: from,
      subject: subject
      text: content
    };
    sgMail.send(msg);
    const params = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        recipient: to,
        subject,
        content,
        user_id
      })
    };
    return fetch(`${apiUrl}create-message`, params)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(res => {
        if (res.ok) {
          dispatch(sendSuccess());
          dispatch(reset());
        } else {
          dispatch(sendFailure(res.error));
        }
      });
  };
};

export default {
  handleChange,
  reset,
  initSend,
  sendSuccess,
  sendFailure,
  send
};
