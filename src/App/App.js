import React, { Component } from 'react';
import QuestionGroup from '../QuestionGroup/QuestionGroup.js';
import questionGroups from '../data/questions.js';
import './App.css';

class App extends Component {
  render() {
    const questionGroup = questionGroups[0];

    return (
      <div className="App">
        <QuestionGroup
          title={questionGroup.title}
          questions={questionGroup.questions}
        />
      </div>
    );
  }
}

export default App;
