import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Choice extends Component { 
	render() {
		return (
			<Button className='choice' size='large' variant='contained' onClick={() => this.props.handleAnswer(this.props.answerText)}>
			{this.props.answerText}
			</Button>
		);
	}
}

Choice.propTypes = {
	answerText: PropTypes.string,
	handleAnswer: PropTypes.func
};

export default Choice;