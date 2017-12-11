import React, { Component } from 'react';

export default class SignUp extends Component {

  render() {
    const online = (
      <button className="online"><h4>You can sign up</h4></button>
    );
    const offline = (
      <button><h4>Cannot sign up</h4></button>
    );
    return (
      <div className="chat">
        {this.props.isSignUp? online : offline}
      </div>
    )
  }
}
