import React, { Component } from 'react';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends Component {
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          //   total={this.countTotalFeedback()}
          //   positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}

export default Feedback;
