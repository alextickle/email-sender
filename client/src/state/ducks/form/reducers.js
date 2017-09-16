import types from './types';

const initialState = {
  loading: false,
  message: '',
  name: '',
  email: '',
  status: ''
};

const form = (state = initialState, action) => {
  let temp = {};
  let fieldName;
  switch (action.type) {
    case types.INIT_SEND:
      return Object.assign({}, state, {
        loading: true
      });
    case types.SEND_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        status: 'Message sent'
      });
    case types.SEND_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        status: 'Failed to send'
      });
    case types.HANDLE_CHANGE:
      fieldName = action.field;
      temp[fieldName] = action.value;
      return Object.assign({}, state, temp);
    case types.RESET:
      return Object.assign({}, state, {
        loading: false,
        message: '',
        name: '',
        email: ''
      });
    default:
      return state;
  }
};

export default form;
