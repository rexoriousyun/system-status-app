import React, { Component } from 'react'
import CurrentTime from './CurrentTime.js';
import OperationTime from './OperationTime.js';
import statusJson from '../system_status.json';
import Logo from '../img/akira_logo.jpg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      directSignupAllowed: undefined,
      isOpenForBusiness: undefined,
      online: undefined,
      openHoursToday: {
        closeAt: {
          hour: undefined,
          minute: undefined,
          day: undefined
        },
        openAt: {
          hour: '',
          minute: '',
          day: ''
        }
      },
      systemTime: {
        hour: '',
        minute: '',
        day: ''
      }
    }
  };

  componentDidMount(){
    function timeClass(t) {
      let hour = new Date(t).getHours();
      let minute = new Date(t).getMinutes();
      let day = 'AM'
      if (hour >= 12) {
        day = 'PM';
        hour -= 12;
      }
      if (minute === 0) {
        minute = '';
      } else if (minute < 10) {
        minute = ':' + '0' + minute;
      } else {
        minute = ':' + minute;
      }
      return [hour, minute, day]
    }
    // Commented out due to Access-Control-Allow-Origin header problem.
    //
    fetch('https://app.akira.md/api/system_status.json')
    .then(results => {
      return results.json();
    }).then(json => {
      this.setState({
        data: json,
        directSignupAllowed: json['direct_signup_allowed'],
        isOpenForBusiness: json['is_open_for_business'],
        online: json['online'],
        openHoursToday: {
          closeAt: {
            hour: timeClass(json['open_hours_today']['close_at'])[0],
            minute: timeClass(json['open_hours_today']['close_at'])[1],
            day: timeClass(json['open_hours_today']['close_at'])[2]
          },
          openAt: {
            hour: timeClass(json['open_hours_today']['open_at'])[0],
            minute: timeClass(json['open_hours_today']['open_at'])[1],
            day: timeClass(json['open_hours_today']['open_at'])[2]
          }
        },
        systemTime: {
          hour: timeClass(json['system_time'])[0],
          minute: timeClass(json['system_time'])[1],
          day: timeClass(json['system_time'])[2]
        }
      })
    })
    // this.setState({
    //   data: statusJson,
    //   directSignupAllowed: statusJson['direct_signup_allowed'],
    //   isOpenForBusiness: statusJson['is_open_for_business'],
    //   online: statusJson['online'],
    //   openHoursToday: {
    //     closeAt: {
    //       hour: timeClass(statusJson['open_hours_today']['close_at'])[0],
    //       minute: timeClass(statusJson['open_hours_today']['close_at'])[1],
    //       day: timeClass(statusJson['open_hours_today']['close_at'])[2]
    //     },
    //     openAt: {
    //       hour: timeClass(statusJson['open_hours_today']['open_at'])[0],
    //       minute: timeClass(statusJson['open_hours_today']['open_at'])[1],
    //       day: timeClass(statusJson['open_hours_today']['open_at'])[2]
    //     }
    //   },
    //   systemTime: {
    //     hour: timeClass(statusJson['system_time'])[0],
    //     minute: timeClass(statusJson['system_time'])[1],
    //     day: timeClass(statusJson['system_time'])[2]
    //   }
    // })
  };

  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <img src={Logo} alt='logo'/>
          </div>
        </header>
        <div className="main">
          <div id="snow">
          </div>
          <CurrentTime hour={this.state.systemTime.hour}
            minute={this.state.systemTime.minute}
            day={this.state.systemTime.day}
            isOpenForBusiness={this.state.isOpenForBusiness}
            />
          <OperationTime
            openHour={this.state.openHoursToday.openAt.hour}
            openMinute={this.state.openHoursToday.openAt.minute}
            openDay={this.state.openHoursToday.openAt.day}
            closeHour={this.state.openHoursToday.closeAt.hour}
            closeMinute={this.state.openHoursToday.closeAt.minute}
            closeDay={this.state.openHoursToday.closeAt.day}
          />
        </div>
      </div>
    );
  }
}
