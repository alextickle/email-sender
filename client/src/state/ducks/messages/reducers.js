import types from './types';

const initialState = {
  loading: false,
  messages: [],
  errors: {}
};

const messages = (state = initialState, action) => {
  let temp = {};
  switch (action.type) {
    case types.INIT_FETCH_MESSAGES:
      return Object.assign({}, state, {
        loading: true
      });
    case types.FETCH_MESSAGES_SUCCESS:
      return Object.assign({}, state, {
        loading: false
      });
    case types.FETCH_MESSAGES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errors: action.errors
      });
    case types.SET_MESSAGES:
      return Object.assign({}, state, {
        messages: action.messages
      });
    default:
      return state;
  }
};

export default messages;
