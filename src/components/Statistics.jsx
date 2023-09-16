import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';

class Statistics extends Component {

  //   countTotalFeedback = () => {
  //     return this.props.good + this.props.neutral + this.props.bad;
  //   };

  //   countPositiveFeedbackPercentage = () => {
  //     const posPercent = (
  //       (this.props.good / this.countTotalFeedback()) *
  //       100
  //     ).toFixed(2);
  //     if (!isNaN(posPercent)) return `${posPercent}%`;
  //   };

  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div>
        <h2>Statistics</h2>
            <FeedbackOptions options={ }
                // onLeaveFeedback={ }
            ></FeedbackOptions>
        <div className="statistics-wrapper">
          <p>
            Good:{' '}
            <span style={{ color: '#00b400', fontWeight: 'bold' }}>{good}</span>
          </p>
          <p>
            Neutral: <span style={{ fontWeight: 'bold' }}>{neutral}</span>
          </p>
          <p>
            Bad:{' '}
            <span style={{ color: '#ff0000', fontWeight: 'bold' }}>{bad}</span>
          </p>
          <p>
            Total:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {/* {this.countTotalFeedback()} */}
            </span>
          </p>
          <p>
            Positive feedback:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {/* {this.countPositiveFeedbackPercentage()} */}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Statistics;
