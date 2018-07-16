import React from 'react';
import QuestionGroup from './QuestionGroup/QuestionGroup.js';
import questionGroups from '../data/mockQuestions.js';
import './Quiz.css';

class Quiz extends React.Component {
  render() {
    const questionGroup = questionGroups[0];
    return (
      <div className='Quiz'>
        <QuestionGroup
          title={questionGroup.title}
          questions={questionGroup.questions}
        />
      </div>
    );
  }
}

export default Quiz;
