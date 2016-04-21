import React, {Component, PropTypes} from 'react';

class Application extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default Application;
