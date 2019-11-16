import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { config } from 'overmind-app';
import * as serviceWorker from './serviceWorker';

const overmind = createOvermind(config, { devtools: true });

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
