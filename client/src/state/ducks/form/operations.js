import actions from './actions';

export const handleChange = actions.handleChange;

export const reset = actions.reset;

export const initSend = actions.initSend;

export const send = actions.send;

export const sendSuccess = actions.sendSuccess;

export const sendFailure = actions.sendFailure;

export default {
  handleChange,
  reset,
  initSend,
  send,
  sendSuccess,
  sendFailure
};
