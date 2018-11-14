import React, { Component } from 'react';
import Choice from './Choice';
import PropTypes from 'prop-types';

class Question extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			answers: ['1', '2', '3', '4']
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
		answers[0] = this.props.data.questions[this.props.qnumber].answer;
		used[0] = this.props.qnumber;
		
		// creates other options based on other question's answers
		// TODO: set up predefined options in .json and use those instead.
		for(let i = 1; i < this.state.answers.length; i++) {			
			let x = getRandomInt(this.props.data.questions.length);
			while(used.indexOf(x) !== -1) {
				x = getRandomInt(this.props.data.questions.length);
			}
			used[i] = x;
			answers[i] = this.props.data.questions[x].answer;
		}
		
		shuffle(answers);
		this.setState(
			() => ({
				answers: answers
			})
		);

		/**
		 * Shuffles array using Fischer-Yates
		 * @param {[]} arr 
		 */
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

		/**
		 * Gets random integer from 0 to max
		 * @param {number} max 
		 */
		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}		
	}

	/**
	 * Renders the Choice
	 * @param {string} i 
	 */
	renderChoice(i) {
		return <Choice answerText={i} key={i} handleAnswer={this.handleAnswer}/>;
	}

	/**
	 * Function fed to child, checks to see if answer is correct 
	 * and feeds boolean to this parent's component.
	 * @param {string} answerText 
	 */
	handleAnswer(answerText) {
		const correct = (answerText === this.props.data.questions[this.props.qnumber].answer);
		this.props.getResult(correct, 
			this.props.data.questions[this.props.qnumber].question,
			this.props.data.questions[this.props.qnumber].answer);
	}	

	render() {
		return (
			<div>
				<div className='Question'>
					<h2>
					{this.props.data.questions[this.props.qnumber].question}
					</h2>
				</div>
				<div className='Answers'>
					<div className='Answer0'>
					{this.renderChoice(this.state.answers[0])}
					</div>
					<div className='Answer1'>
					{this.renderChoice(this.state.answers[1])}
					</div>
					<div className='Answer2'>
					{this.renderChoice(this.state.answers[2])}
					</div>
					<div className='Answer3'>
					{this.renderChoice(this.state.answers[3])}
					</div>
				</div>
			</div>
		);
	}
}

Question.propTypes = {
	data: PropTypes.object,
	qnumber: PropTypes.number,
	getResult: PropTypes.func
};

export default Question;