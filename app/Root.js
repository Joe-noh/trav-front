import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {Route} from 'react-router';
import {ReduxRouter} from 'redux-router';

import configureStore from './configureStore';
import * as storage from './persistence/storage';
import * as constants from './constants';
import * as actions from './actions/application';
import {Application, Greeter, Login} from './components';

import './main.styl';

let initialState = {
  application: {
    token: storage.get('token')
  }
};

const DevTools = require('./components/DevTools').default;

export const store = configureStore(initialState);

function requireAuth(nextState, replace) {
  let state = store.getState();
  let isLoggedIn = Boolean(state.application.token);

  if (!isLoggedIn) {
    replace('/');
  }
}

function logout(nextState, replace) {
  store.dispatch(actions.logout());
  replace('/');
}

let routes = [
  <ReduxRouter key="router">
    <Route component={Application}>
      <Route path="/" component={Login} />
      <Route path="a" component={Greeter} onEnter={requireAuth} />
      <Route path="logout" onEnter={logout} />
    </Route>
  </ReduxRouter>
];

if (__DEVTOOLS__) {
  routes.push(<DevTools key="devtools" />);
}

class Root extends Component {
  static propTypes = {
    application: PropTypes.object.isRequired
  };

  render() {
    return (<div>{routes}</div>);
  }
}

export default connect(({application}) => ({application}))(Root);
