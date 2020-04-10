import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

// ------------ COMPONENTS ------------
import App from './components/App';
import GlobalStyles from '../GlobalStyles'
//-------------------------------------

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
      <App />
      <GlobalStyles />
  </Provider>,
  document.getElementById('root')
);
