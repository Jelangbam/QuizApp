import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Results extends Component { 
	render() {
		return (
			<div className='Results'>
				<h2> 
				Congratulations! You got {this.props.score} out of {this.props.total} correct!
				<br></br>
				<Button size='large' onClick={this.props.resetQuiz}>
				{'Try Again?'}
				</Button> 
				</h2>
				<table className="ResultTable">
				<tr>
					<th>Question</th>
					<th>Correct Answer</th>
					<th>Correct?</th>
				</tr>
				{this.props.history.map((question) =>  (					
						<tr key={question}>
							<td>{question.question}</td>
							<td>{question.answer}</td>
							{question.correct ? <td>Correct!</td> : <td> Wrong! </td>}
						</tr>
					))}
				</table>
			</div>
		);
	}
}

Results.propTypes = {
	history: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
	score: PropTypes.number.isRequired,
	resetQuiz: PropTypes.func.isRequired
};

export default Results;