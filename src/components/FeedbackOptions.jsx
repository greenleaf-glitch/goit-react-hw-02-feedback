import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.options.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.props.options.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.props.options.handleBad}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
