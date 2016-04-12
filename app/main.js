import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Greeter from './Greeter.js';

import './main.styl';

let routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Greeter}/>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

