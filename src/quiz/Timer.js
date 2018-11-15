import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {

	componentDidMount() {
		//timestep in ms
		const accuracy = 100;
		this.interval = setInterval(
			() => this.props.incrementTimer(accuracy/1000), accuracy
		);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return(
			<p>Time Elapsed: {this.props.timer.toFixed(1)}</p>
		);
	}
}

Timer.propTypes = {
	incrementTimer: PropTypes.func.isRequired,
	timer: PropTypes.number.isRequired
};

export default Timer;