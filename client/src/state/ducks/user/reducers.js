import types from './types';

const initialState = {
  id: '',
  email: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return Object.assign({}, state, {
        id: action.id,
        email: action.id
      });
    case types.LOGOUT
      return initialState;
    default:
      return state;
  }
};

export default user;
