import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return (
      <h3 style={{ fontSize: '25px', color: 'red' }}>{this.props.message}</h3>
    );
  }
}

export default Notification;
