import React from 'react';
import initStore from './state/store';
import { Provider } from 'react-redux';
import MainContainer from './containers/MainContainer';

const store = initStore();

const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

export default App;
