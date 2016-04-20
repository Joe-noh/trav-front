import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/application';

class Login extends Component {
  static contextTypes = {
    store: PropTypes.any
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {oauth_token, oauth_verifier} = this.props.location.query;

    if (!!oauth_token && !!oauth_verifier) {
      this.context.store.dispatch(actions.login(oauth_token, oauth_verifier)).then(() => {
        this.props.history.push('/a');
      });
    }
  }

  onClick() {
    this.context.store.dispatch(actions.openTwitterLogin());
  }

  render() {
    return (
      <button onClick={::this.onClick}>Signin with Twitter</button>
    );
  }
}

export default Login;
