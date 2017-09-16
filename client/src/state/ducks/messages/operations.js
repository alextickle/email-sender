import actions from './actions';

export const initFetchMessages = actions.initFetchMessages;

export const fetchMessages = actions.fetchMessages;

export const fetchMessagesSuccess = actions.fetchMessagesSuccess;

export const fetchMessagesFailure = actions.fetchMessagesFailure;

export const setMessages = actions.setMessages;

export default {
  initFetchMessages,
  fetchMessages,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  setMessages
};
