import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route} from 'react-router';

import Root, {store} from './Root';

ReactDOM.render(
  (
    <Provider store={store}>
      <Root />
    </Provider>
  ),
  document.getElementById('root')
);

