import React from 'react';
import _ from 'lodash';
import Question from '../Question/Question.js';
import './QuestionGroup.css'

export default class QuestionGroup extends React.Component {
  render() {
    const questions = _.map(this.props.questions, (question, index) => {
      return (
        <Question
          key={index}
          title={question.title}
          answers={question.answers}
        />
      );
    });

    return (
      <div className='QuestionGroup'>
        <div className='QuestionGroup-header'>
          {this.props.title}
        </div>
        <div className='QuestionGroup-questions'>
          {questions}
        </div>
      </div>
    );
  }
}
