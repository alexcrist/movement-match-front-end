import React from 'react';
import _ from 'lodash';
import Answer from '../Answer/Answer';
import './Question.css';

export default class Question extends React.Component {
  render() {
    const answers = _.map(this.props.answers, (answer, index) => {
      return (
        <Answer
          key={index}
          answerIndex={index}
          questionIndex={this.props.questionIndex}
          groupIndex={this.props.groupIndex}
          group={this.props.title}
          multipleChoice={this.props.multipleChoice}
          setAnswer={this.props.setAnswer}
          {...answer}
        />
      );
    });

    const questionStyle = {
      color: this.props.color
    };

    return (
      <div className='Question'>
        <div className='Question-title text' style={questionStyle}>
          {this.props.index}. {this.props.title}
        </div>
        <div className='Question-answers'>
          {answers}
        </div>
      </div>
    );
  }
}
