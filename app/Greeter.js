import React, {Component} from 'react';

class Greeter extends Component {
  render() {
    console.log(this.props.location.query);
    return (
      <div>Hi there and greetings!</div>
    );
  }
}

export default Greeter;

