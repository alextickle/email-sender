import types from './types';
const apiUrl =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:5000/';

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
    type: types.INIT_SEND
  };
};

export const sendSuccess = () => {
  return {
    type: types.SEND_SUCCESS
  };
};

export const sendFailure = error => {
  return {
    type: types.SEND_FAILURE,
    error: error
  };
};

export const send = (e, data) => {
  e.preventDefault();
  return dispatch => {
    dispatch(initSend());
    const params = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
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
