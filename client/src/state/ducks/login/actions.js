import types from './types';
const apiUrl =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:4000/';

export const handleChange = e => {
  return {
    type: types.HANDLE_CHANGE,
    field: e.target.name,
    value: e.target.value
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
        if (res.ok) {
          dispatch(setUser(res.user.id));
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailure(res.error));
        }
      });
  };
};

export const setUser = (id, email) => {
  return {
    type: types.SET_USER,
    userId: id,
    userEmail: email
  };
};

export default {
  handleChange,
  initLogin,
  loginSuccess,
  loginFailure,
  login,
  setUser
};
