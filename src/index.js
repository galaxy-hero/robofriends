import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
// new feature that allows the app to work faster
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();