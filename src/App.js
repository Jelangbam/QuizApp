import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Quiz from './quiz/Quiz';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Windows Shortcut Quiz</h1>
        </header>
        <p className="App-intro">
			<Quiz quizType='Windows'/>
        </p>
      </div>
    );
  }
}

export default App;
