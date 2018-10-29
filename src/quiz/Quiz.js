import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Results from './Results';
import * as data from './data/shortcut.json';

class Quiz extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			quizType: this.props.quizType,
			qnumber: 0,
			score: 0,
			streak: 0,
			total: data.questions.length
		};
		this.getResult = this.getResult.bind(this);
	}

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
					: <Question key={this.state.qnumber} qnumber={this.state.qnumber} getResult={this.getResult} />}
				</div>
				<div className='Score'>
				<p> Current Streak: {this.state.streak} Current Score: {this.state.score} / {this.state.qnumber} </p>
				</div>
			</div>
			);
	}
}

Quiz.propTypes = {
	quizType: PropTypes.string
};

export default Quiz;