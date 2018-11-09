import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Results from './Results';
import Status from './Status';
import './Quiz.css';

class Quiz extends Component { 
	constructor(props) {
		super(props);
		const data = require('./data/' + this.props.quizType + '.json');
		this.state = {
			data: data,
			history: [],
			qnumber: 0,
			score: 0,
			streak: 0,
			total: data.questions.length,
			timer: 0
		};
		this.getResult = this.getResult.bind(this);
		this.resetQuiz = this.resetQuiz.bind(this);
		this.incrementTimer = this.incrementTimer.bind(this);
	}
/*
Reports results to this component, called by child. RESPONSIBLE FOR SCORING
@param boolean correct: true if answered correctly, false otherwise.
*/
	getResult(correct, question, answer) {
		const newHistory = this.state.history.slice();
		newHistory.push({ 
			correct: correct, 
			question: question, 
			answer: answer 
		});
		if(correct) {
			this.setState((prevState) => ({
				history: newHistory,
				score: prevState.score + 1,
				qnumber: prevState.qnumber + 1,
				streak: prevState.streak + 1
			}));
		}
		else {
			this.setState((prevState) => ({
				history: newHistory,
				qnumber: prevState.qnumber + 1,
				streak: 0
			}));			
		}

	}

	incrementTimer(timestep = 0.1) {
		this.setState((prevState) => ({
			timer: prevState.timer + timestep
		}));
	}
	
	resetQuiz() {
		this.setState({
			score: 0,
			qnumber: 0,
			streak: 0,
			history:[],
			timer:0
		});
	}

	render() {
		return (
			<div>
				<div className='Quiz-data'>
					{this.state.total === this.state.qnumber 
					? <Results score={this.state.score} 
						timer={this.state.timer}
						total={this.state.total} 
						history={this.state.history} 
						resetQuiz={this.resetQuiz}/>
					: <Question key={this.state.qnumber} 
						data={this.state.data} 
						qnumber={this.state.qnumber} 
						getResult={this.getResult} />}
				</div>
				<div className='Quiz-score'>
				{this.state.total === this.state.qnumber 
					? null
					: <Status score={this.state.score} 
						streak={this.state.streak} 
						qnumber={this.state.qnumber} 
						incrementTimer={this.incrementTimer}
						timer={this.state.timer}
						key={this.qnumber + this.timer}
						/>}
				</div>
			</div>
			);
	}
}

Quiz.propTypes = {
	quizType: PropTypes.string
};

export default Quiz;