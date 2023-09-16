import React, { Component } from 'react';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';
import SectionTitle from './SectionTitle';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

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
    return (
      <div>
        {/* <SectionTitle title="Feedback"> */}
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={{
            handleGood: this.handleGood,
            handleNeutral: this.handleNeutral,
            handleBad: this.handleBad,
          }}
          //   onLeaveFeedback={}
        ></FeedbackOptions>
        {/* </SectionTitle> */}
        {/* <SectionTitle title="Statistics"> */}
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          countTotalFeedback={this.countTotalFeedback}
        ></Statistics>
        {/* </SectionTitle> */}
      </div>
    );
  }
}

export default Feedback;
