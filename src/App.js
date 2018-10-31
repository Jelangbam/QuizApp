import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Quiz from './quiz/Quiz';
import Dropdown from './quiz/Dropdown';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quizType: ''
		};
		this.handleQuizChange = this.handleQuizChange.bind(this);
	}

	handleQuizChange(quizType) {
		this.setState({
			quizType: quizType
		});
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Dropdown title='Select A Quiz!' handleQuizChange={this.handleQuizChange} key={'title'}/>
        </header>
		{ this.state.quizType !== '' &&
        <div className="App-quiz">
		<Quiz quizType={this.state.quizType} key={this.state.quizType}/>
		</div>
		}
      </div>
    );
  }
}

export default App;
