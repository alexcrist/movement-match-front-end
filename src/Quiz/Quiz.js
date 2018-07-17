import React from 'react';
import _ from 'lodash';
import { Link, Redirect } from 'react-router-dom';
import update from 'immutability-helper';
import QuestionGroup from './QuestionGroup/QuestionGroup.js';
import questionGroups from '../data/mockQuestions.js';
import './Quiz.css';

const colors = [
  '#111d4a',
  '#730071',
  '#CD5334',
  '#76AF24',
  '#0F5199'
];

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.fetchQuestionGroups = this.fetchQuestionGroups.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.onFinish = this.onFinish.bind(this);
    
    this.state = {
      finishButtonText: 'Finish',
      redirectToResults: false
    };
    this.fetchQuestionGroups();
  }

  fetchQuestionGroups() {
    // TODO: fetch question groups from back end
    setTimeout(() => {
      this.setState({ questionGroups });
    }, 250);
  }

  setAnswer(groupIndex, questionIndex, answerIndex, multipleChoice) {
    let answer
    
    if (multipleChoice) {
      answer = this.state
        .questionGroups[groupIndex]
        .questions[questionIndex]
        .answer || [];

      if (answer.includes(answerIndex)) {
        answer = _.without(answer, answerIndex);
      } else {
        answer.push(answerIndex);
      }

    } else {
      answer = [answerIndex];
    }


    const questionGroups = update(this.state.questionGroups, {
      [groupIndex]: {
        questions: {
          [questionIndex]: {
            answer: {
              $set: answer
            }
          }
        }
      }
    });
    this.setState({ questionGroups });
  }

  onFinish() {
    this.setState({ finishButtonText: 'Processing...' });

    // TODO: process results on back end
    console.log(this.state.questionGroups);
    setTimeout(() => {
      const results = [];
      this.props.setResults(results);
      this.setState({ redirectToResults: true });
    }, 250);
  }

  render() {
    if (this.state.redirectToResults) {
      return <Redirect to='/results' />;
    }

    const content = _.map(this.state.questionGroups, (questionGroup, index) => {
      const color = colors[index % colors.length];
      return (
        <QuestionGroup
          key={index}
          groupIndex={index}
          color={color}
          setAnswer={this.setAnswer}
          {...questionGroup}
        />
      );
    });

    return (
      <div className='Quiz'>
        <div className='Quiz-header'>
          <h1 className='Quiz-title'>Movement Match Quiz</h1>
        </div>
        <div className='Quiz-body'>
          {content}
          <button className='Quiz-finish' onClick={this.onFinish}>
            {this.state.finishButtonText}
          </button>
        </div>
      </div>
    );
  }
}

export default Quiz;
