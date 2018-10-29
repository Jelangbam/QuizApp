import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component { 
	render() {
		return (
			<h2> 
			Congratulations! You got {this.props.score} out of {this.props.total} correct!
			</h2>
		);
	}
}

Results.propTypes = {
	total: PropTypes.number,
	score: PropTypes.number
};

export default Results;