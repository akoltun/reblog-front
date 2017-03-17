import React from 'react';
import ReactDOM from 'react-dom';

import { Router, match, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import createStore from 'store';
import routes from 'routes';
import prepareData from 'helpers/prepareData';

import DevTools from 'containers/DevTools';

const store = createStore(window.__INITIAL_STATE__);

function historyCallback(location) {
  match({ location, routes }, (error, redirect, routerState) => {
    if (!error && !redirect) {
      prepareData(store, routerState);
    }
  });
}

browserHistory.listenBefore(historyCallback);

historyCallback(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools'),
  () => {
    delete window.__INITIAL_STATE__;
  }
);

export default App;
