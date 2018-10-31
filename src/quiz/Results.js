import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Results extends Component { 
	render() {
		return (
			<div className='results'>
			<h2> 
			Congratulations! You got {this.props.score} out of {this.props.total} correct!
			</h2>
			<Button size='large' onClick={this.props.resetQuiz}>
			{'Try Again?'}
			</Button> 
			</div>
		);
	}
}

Results.propTypes = {
	total: PropTypes.number,
	score: PropTypes.number,
	resetQuiz: PropTypes.func
};

export default Results;