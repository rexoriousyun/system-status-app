import React, { Component } from 'react';

export default class OperationTime extends Component {
  render(){
    return(
      <div className="operationTime">
        <div className="area-title">
          <h3>Hours</h3>
        </div>
        <div className="area-content">
          <h4>{this.props.openHour}{this.props.openMinute}{this.props.openDay} - {this.props.closeHour}{this.props.closeMinute}{this.props.closeDay}</h4>
        </div>
      </div>
    )
  }
}