import React from 'react';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
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
          color={this.props.color}
          setAnswer={this.props.setAnswer}
          {...question}        />
      );
    });

    const titleStyle = {
      backgroundColor: this.props.color
    };
    const borderStyle = {
      borderColor: this.props.color
    };

    return (
      <div className='QuestionGroup'>
        <div className='QuestionGroup-header'>
          <h2 className='QuestionGroup-title' style={titleStyle}>
            <FontAwesome className='QuestionGroup-icon' name={this.props.icon} />
            {this.props.title}
          </h2>
        </div>
        <div className='QuestionGroup-questions'>
          <div className='QuestionGroup-border' style={borderStyle}/>
          {questions}
        </div>
      </div>
    );
  }
}
