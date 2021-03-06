import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Quiz from './quiz/Quiz';
import ClickOutside from './quiz/ClickOutside';
import Dropdown from './quiz/Dropdown';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quizType: '',
			dropdownActive: false
		};
		this.disableDropdown = this.disableDropdown.bind(this);
		this.enableDropdown = this.enableDropdown.bind(this);
		this.handleQuizChange = this.handleQuizChange.bind(this);
	}

	/**
	 * Disables dropdown, doesn't show options
	 */
	disableDropdown() {
		this.setState({
			dropdownActive: false
		});
	}

	/**
	 * Enables dropdown, shows options
	 */
	enableDropdown() {
		this.setState({
			dropdownActive: true
		});
	}

	/**
	 * Change quiz to the quizType
	 * @param {string} quizType - base name of quiz in the data folder, ex. "shortcut"
	 */
	handleQuizChange(quizType) {
		this.setState({
			quizType: quizType
		});
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
		<ClickOutside disableDropdown={this.disableDropdown}>
			<Dropdown title='->Select A Quiz Here!<-' 
				disableDropdown={this.disableDropdown}
				enableDropdown={this.enableDropdown}
				handleQuizChange={this.handleQuizChange} 
				dropdownActive={this.state.dropdownActive}
				key={'quizDropdown'}/>
		</ClickOutside>
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
