import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import update from 'immutability-helper';
import QuestionGroup from './QuestionGroup/QuestionGroup.js';
import questionGroups from '../data/mockQuestions.js';
import logo from '../assets/logo36.svg';
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
    const answerGroups = _.cloneDeep(questionGroups);
    this.state = { answerGroups };
    this.setAnswer = this.setAnswer.bind(this);
    this.onFinish = this.onFinish.bind(this);
  }

  setAnswer(groupIndex, questionIndex, answerIndex, multipleChoice) {
    let answer;

    if (multipleChoice) {
      answer = this.state
        .answerGroups[groupIndex]
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

    console.log('answer', answer);

    const answerGroups = update(this.state.answerGroups, {
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
    this.setState({ answerGroups });
  }

  onFinish() {
    console.log('answerGroups', this.state.answerGroups);
  }

  render() {
    const content = _.map(questionGroups, (questionGroup, index) => {
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
          <Link to='/' className='Quiz-logo-container'>
            <img 
              className='Quiz-logo'
              src={logo}
              alt='Movement Match logo'
            />
          </Link>
          <h1 className='Quiz-title'>Movement Match Quiz</h1>
        </div>
        <div className='Quiz-body'>
          {content}
          <button className='Quiz-finish' onClick={this.onFinish}>
            Finish
          </button>
        </div>
      </div>
    );
  }
}

export default Quiz;
