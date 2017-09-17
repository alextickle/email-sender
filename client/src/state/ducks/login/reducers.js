import types from './types';

const initialState = {
  loading: false,
  email: '',
  password: '',
  status: ''
};

const login = (state = initialState, action) => {
  let temp = {};
  switch (action.type) {
    case types.INIT_LOGIN:
      return Object.assign({}, state, {
        loading: true
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        status: 'Login successful'
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        status: 'Incorrect username and/or password'
      });
    case types.HANDLE_CHANGE:
      temp[action.field] = action.value;
      return Object.assign({}, state, temp);
    case types.SET_USER:
      return Object.assign({}, state, {
        userId: action.userId,
        userEmail: action.userEmail
      });
    case types.RESET:
      return initialState;
    default:
      return state;
  }
};

export default login;
