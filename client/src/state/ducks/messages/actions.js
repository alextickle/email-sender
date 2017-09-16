import types from './types';
const apiUrl =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:5000/';

export const initFetchMessages = () => {
  return {
    type: types.INIT_FETCH_MESSAGES
  };
};

export const fetchMessagesSuccess = () => {
  return {
    type: types.FETCH_MESSAGES_SUCCESS
  };
};

export const fetchMessagesFailure = error => {
  return {
    type: types.FETCH_MESSAGES_FAILURE,
    error: error
  };
};

export const fetchMessages = id => {
  return dispatch => {
    dispatch(initFetchMessages());
    const params = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch(`${apiUrl}messages/${id}`, params)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(res => {
        if (res.messages) {
          dispatch(setMessages(res.messages));
          dispatch(fetchMessagesSuccess());
        } else {
          dispatch(fetchMessagesFailure(res.error));
        }
      });
  };
};

export const setMessages = messages => {
  return {
    type: types.SET_MESSAGES,
    messages: messages
  };
};

export default {
  initFetchMessages,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  fetchMessages,
  setMessages
};
