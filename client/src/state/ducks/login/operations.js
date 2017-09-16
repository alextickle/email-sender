import actions from './actions';

export const handleChange = actions.handleChange;

export const reset = actions.reset;

export const initLogin = actions.initLogin;

export const login = actions.login;

export const loginSuccess = actions.loginSuccess;

export const loginFailure = actions.loginFailure;

export const setUser = actions.setUser;

export default {
  handleChange,
  reset,
  initLogin,
  login,
  loginSuccess,
  loginFailure,
  setUser
};
