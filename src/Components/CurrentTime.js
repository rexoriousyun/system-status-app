import React, { Component } from 'react';

export default class CurrentTime extends Component {
  render() {
    return(
      <div>
        <h3>{this.props.hour}{this.props.minute}&nbsp;{this.props.day}</h3>
      </div>
    )
  }
}
