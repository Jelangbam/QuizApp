import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {

	componentDidMount() {
		//timestep in ms
		const timestep = 100;
		this.interval = setInterval(
			() => this.props.incrementTimer(timestep/1000), timestep
		);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return(
			<p>Time Elapsed: {this.props.timer.toPrecision(2)}</p>
		);
	}
}

Timer.propTypes = {
	incrementTimer: PropTypes.func.isRequired,
	timer: PropTypes.number.isRequired
};

export default Timer;