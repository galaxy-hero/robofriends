import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList'
// new feature that allows the app to work faster
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';


ReactDOM.render(
  <CardList robots={robots}/>,
  document.getElementById('root')
);

serviceWorker.unregister();