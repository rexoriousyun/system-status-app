import React, { Component } from 'react';

export default class CurrentTime extends Component {
  render() {
    return(
      <div className="systemTime">
        <div className="business">
          <h5>we are</h5>
          <h2>CLOSED</h2>
          <h4 className="time">{this.props.hour}{this.props.minute}&nbsp;{this.props.day}</h4>
        </div>
      </div>
    )
  }
  componentDidUpdate() {
    this.props.isOpenForBusiness? document.getElementsByClassName('business')[0].className += ' open' : document.getElementsByClassName('business')[0].className += ' close'
  }
}
