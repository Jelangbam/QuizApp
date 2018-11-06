import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Choice extends Component { 
	render() {
		return (
			<Button className='Choice' style={{ 
				maxWidth: '400px', maxHeight: '200px', minWidth: '400px', minHeight: '200px', fontSize: 28, fontFamily: "Arial"}}
				variant='contained' onClick={() => this.props.handleAnswer(this.props.answerText)}>
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