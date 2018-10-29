import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Choice extends Component { 
	render() {
		return (
			<button className="choice" onClick={() => this.props.handleAnswer(this.props.answerText)}>
			{this.props.answerText}
			</button>
		);
	}
}

Choice.propTypes = {
	answerText: PropTypes.string,
	handleAnswer: PropTypes.func
};

export default Choice;