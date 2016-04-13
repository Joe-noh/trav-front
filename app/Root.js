import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {Route} from 'react-router';
import {ReduxRouter} from 'redux-router';

import configureStore from './configureStore';

import Greeter from './Greeter.js';

import './main.styl';

const initialState = {
  application: {}
};

export const store = configureStore(initialState);

let routes = (
  <ReduxRouter>
    <Route path="/" component={Greeter} />
  </ReduxRouter>
);

class Root extends Component {
  static propTypes = {
    application: PropTypes.object.isRequired
  };

  render() {
    return routes;
  }
}

export default connect(({application}) => ({application}))(Root);
