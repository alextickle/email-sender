import types from './types';

export const setUser = (id, email) => {
  return {
    type: types.SET_USER,
    id: id,
    email: email
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export default {
  setUser,
  logout
};
