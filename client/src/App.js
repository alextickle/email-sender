import React from 'react';
import initStore from './state/store';
import { Provider } from 'react-redux'

const store = initStore();

const App =>
  <Provider store={store}>
		<MainContainer />
	</Provider>;

export default App;
