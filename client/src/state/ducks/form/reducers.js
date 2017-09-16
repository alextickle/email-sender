import types from './types';

const initialState = {
  isFetching: false,
  message: '',
  name: '',
  email: ''
};

const form = (state = initialState, action) => {
  let temp = {};
  let fieldName;
  switch (action.type) {
    case types.INIT_SEND:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.SEND_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false
      });
    case types.SEND_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case types.HANDLE_CHANGE:
      fieldName = action.field;
      temp[fieldName] = action.value;
      return Object.assign({}, state, temp);
    default:
      return state;
  }
};

export default form;
