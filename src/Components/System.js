import React, { Component } from 'react';

export default class System extends Component {

  render() {
    const online = (
        <button className="online"><h4>Online</h4></button>
    );
    const offline = (
      <button><h4>Offline</h4></button>
    );
    return (
      <div className="chat">
        {this.props.isOnline? online : offline}
      </div>
    )
  }
}
