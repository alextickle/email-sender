import types from './types';
import { setUser } from '../user/actions';
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

export const initLogin = () => {
  return {
    type: types.INIT_LOGIN
  };
};

export const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS
  };
};

export const loginFailure = error => {
  return {
    type: types.LOGIN_FAILURE,
    error: error
  };
};

export const login = (e, email, password) => {
  e.preventDefault();
  return dispatch => {
    dispatch(initLogin());
    const params = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    };
    return fetch(`${apiUrl}login`, params)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(res => {
        if (res.user) {
          dispatch(setUser(res.user.id, res.user.email));
          dispatch(loginSuccess());
          dispatch(reset());
        } else {
          dispatch(loginFailure(res.error));
        }
      });
  };
};

export default {
  handleChange,
  reset,
  initLogin,
  loginSuccess,
  loginFailure,
  login
};
