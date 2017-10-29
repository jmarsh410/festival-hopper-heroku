import React, { Component } from 'react';
import '../styles/checkin-button.css';

class CheckInButton extends Component {
  render() {
    return (
      <button className="btn btn--checkIn checkIn" onClick={this.props.handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon--check checkIn-icon" viewBox="0 0 32 32">
          <title>checkmark</title>
          <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
        </svg>
        <span className="checkIn-count">{this.props.count}</span>
      </button>
    );
  }
}

export default CheckInButton;
