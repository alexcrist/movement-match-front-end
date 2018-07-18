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
          questionIndex={index}
          groupIndex={this.props.groupIndex}
          index={index + 1}
          setAnswer={this.props.setAnswer}
          {...question}        />
      );
    });

    return (
      <div className='QuestionGroup card'>
        <h2 className='QuestionGroup-title subtitle'>{this.props.title}</h2>
        <div className='QuestionGroup-questions'>
          {questions}
        </div>
      </div>
    );
  }
}
