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
          index={index + 1}
          title={question.title}
          answers={question.answers}
        />
      );
    });

    return (
      <div className='QuestionGroup'>
        <div className='QuestionGroup-header'>
          <div className='QuestionGroup-title'>
            {this.props.title}
          </div>
        </div>
        <div className='QuestionGroup-questions'>
          {questions}
        </div>
      </div>
    );
  }
}
