import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';
import globalStyles from './styles';
import Routes from './Routes';
import store from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <Global styles={globalStyles} />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);

serviceWorker.unregister();
