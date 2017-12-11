import React, { Component } from 'react';

export default class OperationTime extends Component {

  render(){
    const closed = (
      <h1 className='close'>Office closed</h1>
    )
    const open = (
      <h1 className='open'>Office open</h1>
    )
    return(
      <div className="operationTime">
        <div className="text">
          <h3>Hours of Operation</h3>
        </div>
        <div>
          <h2>{this.props.openHour}{this.props.openMinute}&nbsp;{this.props.openDay} - {this.props.closeHour}{this.props.closeMinute}&nbsp;{this.props.closeDay}</h2>
        </div>
        <div className="text">
          {this.props.isOpen? open : closed}
        </div>
      </div>
    )
  }
}
