import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// for now is todapp only
import configureStore from './scenes/TodoApp/store/configureStore';

import configureRouter from './router/configureRouter';

import './index.scss';

const store = configureStore();
const router = configureRouter();

render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root'),
  () => {
    console.log('This callback occurs after ReactDOM.render does its thing');
  }
);
