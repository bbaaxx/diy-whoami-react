import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Store is todapp only for now thus is imported here from its pod
import configureStore from './store/configureStore';
import configureRouter from './router/configureRouter';

import './index.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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
