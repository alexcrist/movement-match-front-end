import React from 'react';
import _ from 'lodash';
import Answer from '../Answer/Answer';
import './Question.css';

export default class Question extends React.Component {
  render() {
    console.log('this.props.multipleChoice', this.props.multipleChoice);
    const answers = _.map(this.props.answers, (answer, index) => {
      return (
        <Answer
          key={index}
          title={answer.title}
          group={this.props.title}
          multipleChoice={this.props.multipleChoice}
        />
      );
    });

    return (
      <div className='Question'>
        <div className='Question-title'>
          {this.props.index}. {this.props.title}
        </div>
        <div className='Question-answers'>
          {answers}
        </div>
      </div>
    );
  }
}
