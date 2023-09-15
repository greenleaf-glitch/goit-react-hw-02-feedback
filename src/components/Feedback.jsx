import React, { Component } from 'react';

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
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const posPercent = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(2);
    console.log(posPercent);
    if (!isNaN(posPercent)) return `${posPercent}%`;
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div className="button-wrapper">
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div className="statistics-wrapper">
          <p>
            <span>Good: {this.state.good}</span>
          </p>
          <p>
            <span>Neutral: {this.state.neutral}</span>
          </p>
          <p>
            <span>Bad: {this.state.bad}</span>
          </p>
          <p>
            <span>Total: {this.countTotalFeedback()}</span>
            <span></span>
          </p>
          <p>
            <span>
              Positive feedback: {this.countPositiveFeedbackPercentage()}
            </span>
            <span></span>
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
