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
          multipleChoice={question.multipleChoice}
        />
      );
    });

    return (
      <div className='QuestionGroup'>
        <div className='QuestionGroup-header'>
          <h2 className='QuestionGroup-title'>
            {this.props.title}
          </h2>
        </div>
        <div className='QuestionGroup-questions'>
          {questions}
        </div>
      </div>
    );
  }
}
