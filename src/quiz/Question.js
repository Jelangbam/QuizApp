import React, { Component } from 'react';
import Choice from './Choice';
import PropTypes from 'prop-types';
import * as data from './data/shortcut.json';

class Question extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			answers: ['1', '2', '3', '4'],
		};
		this.handleAnswer = this.handleAnswer.bind(this);
	}

	componentDidMount() {
		this.createQuestion();
	}
/*
Creates question from question number and the .json containing 
information. Grabs random answers from other questions and shuffles.
*/
	createQuestion() {
		let answers = [];
		let used = [];
		answers[0] = data.questions[this.props.qnumber].answer;
		used[0] = this.props.qnumber;
		for(let i = 1; i < this.state.answers.length; i++) {			
			let x = getRandomInt(data.questions.length);
			while(used.indexOf(x) !== -1) {
				x = getRandomInt(data.questions.length);
			}
			used[i] = x;
			answers[i] = data.questions[x].answer;
		}
		shuffle(answers);
		this.setState(
			() => ({
				answers: answers
			})
		);
		function shuffle(arr) {
			let i, j, x;
			for (i = arr.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				x = arr[i];
				arr[i] = arr[j];
				arr[j] = x;
			}
			return arr;
		}
		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}		
	}


/*
Renders the Choice 
@param string: contains the text in the given choice
*/
	renderChoice(i) {
		return <Choice answerText={i} key={i} handleAnswer={this.handleAnswer}/>;
	}
/*
Function fed to child, checks to see if answer is correct and feeds
boolean to this parent's component.
*/
	handleAnswer(answerText) {
		const correct = (answerText === data.questions[this.props.qnumber].answer);
		this.props.getResult(correct);
	}	

	render() {
		return (
			<div>
				<div className='question'>
				{data.questions[this.props.qnumber].question}
				</div>
				<div className='answer-row'>
				{this.renderChoice(this.state.answers[0])}
				{this.renderChoice(this.state.answers[1])}
				</div>
				<div className='answer-row'>
				{this.renderChoice(this.state.answers[2])}
				{this.renderChoice(this.state.answers[3])}
				</div>	
			</div>
		);
	}
}

Question.propTypes = {
	qnumber: PropTypes.number,
	getResult: PropTypes.func
};

export default Question;