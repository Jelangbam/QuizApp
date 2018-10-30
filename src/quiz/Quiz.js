import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Results from './Results';
import Status from './Status';

class Quiz extends Component { 
	constructor(props) {
		super(props);
		const data = require('./data/' + this.props.quizType + '.json');
		this.state = {
			data: data,
			qnumber: 0,
			score: 0,
			streak: 0,
			total: data.questions.length
		};
		this.getResult = this.getResult.bind(this);
	}
/*
Reports results to this component, called by child. RESPONSIBLE FOR SCORING
@param boolean correct: true if answered correctly, false otherwise.
*/
	getResult(correct) {
		if(correct) {
			this.setState((prevState) => ({
				score: prevState.score + 1,
				qnumber: prevState.qnumber + 1,
				streak: prevState.streak + 1
			}));
		}
		else {
			this.setState((prevState) => ({
				qnumber: prevState.qnumber + 1,
				streak: 0
			}));			
		}

	}

	render() {
		return (
			<div>
				<div>
					{this.state.total === this.state.qnumber 
					? <Results score={this.state.score} total={this.state.total}/>
					: <Question key={this.state.qnumber} data={this.state.data} qnumber={this.state.qnumber} getResult={this.getResult} />}
				</div>
				<div className='Score'>
				{this.state.total === this.state.qnumber 
					? null
					: <Status score={this.state.score} streak={this.state.streak} qnumber={this.state.qnumber} />}
				</div>
			</div>
			);
	}
}

Quiz.propTypes = {
	quizType: PropTypes.string
};

export default Quiz;