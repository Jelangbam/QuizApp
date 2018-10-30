import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Status extends Component { 
	render() {
		return (
			<h3> 
			Current Score: {this.props.score}/{this.props.qnumber} &nbsp;
			Current Streak: {this.props.streak}
			</h3>
		);
	}
}

Status.propTypes = {
	streak: PropTypes.number,
	qnumber: PropTypes.number,
	score: PropTypes.number
};

export default Status;