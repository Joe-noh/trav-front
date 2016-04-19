import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/application';

class Login extends Component {
  static contextTypes = {
    store: PropTypes.any
  }

  constructor(props) {
    super(props);
  }

  onClick() {
    console.log("a");
    this.context.store.dispatch(actions.openTwitterLogin());
  }

  render() {
    return (
      <button onClick={::this.onClick}>Signin with Twitter</button>
    );
  }
}

export default Login;
