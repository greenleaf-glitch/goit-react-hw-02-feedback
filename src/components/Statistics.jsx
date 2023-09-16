import React, { Component } from 'react';
import Notification from './Notification';

class Statistics extends Component {
  countPositiveFeedbackPercentage = () => {
    const posPercent = (
      (this.props.good / this.countTotalFeedback()) *
      100
    ).toFixed(2);
    if (!isNaN(posPercent)) return `${posPercent}%`;
  };

  countTotalFeedback = () => {
    return this.props.good + this.props.neutral + this.props.bad;
  };

  render() {
    const { good, neutral, bad } = this.props;
    return this.countTotalFeedback() !== 0 ? (
      <div>
        <h2>Statistics</h2>
        <div className="statistics-wrapper">
          <p>
            Good:{' '}
            <span style={{ color: '#00b400', fontWeight: 'bold' }}>{good}</span>
          </p>
          <p>
            Neutral:{' '}
            <span style={{ color: '#95058e', fontWeight: 'bold' }}>
              {neutral}
            </span>
          </p>
          <p>
            Bad:{' '}
            <span style={{ color: '#ff0000', fontWeight: 'bold' }}>{bad}</span>
          </p>
          <p>
            Total:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {this.countTotalFeedback()}
            </span>
          </p>
          <p>
            Positive feedback:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {this.countPositiveFeedbackPercentage()}
            </span>
          </p>
        </div>
      </div>
    ) : (
      <Notification message="There is no feedback"></Notification>
    );
  }
}

export default Statistics;
