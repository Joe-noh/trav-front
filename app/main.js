import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Greeter from './Greeter.js';

import './main.styl';

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Greeter}/>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

