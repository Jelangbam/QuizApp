import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';
class Status extends Component { 
	render() {
		return (
			<h3> 
			<Timer incrementTimer={this.props.incrementTimer}
				timer={this.props.timer} />
			Current Score: {this.props.score}/{this.props.qnumber} &nbsp;
			Current Streak: {this.props.streak}
			</h3>
		);
	}
}

Status.propTypes = {
	streak: PropTypes.number,
	qnumber: PropTypes.number,
	score: PropTypes.number,
	incrementTimer: PropTypes.func,
	timer: PropTypes.number
};

export default Status;