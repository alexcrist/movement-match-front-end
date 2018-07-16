import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import QuestionGroup from './QuestionGroup/QuestionGroup.js';
import questionGroups from '../data/mockQuestions.js';
import logo from '../assets/logo36.svg';
import './Quiz.css';

class Quiz extends React.Component {
  render() {
    const content = _.map(questionGroups, (questionGroup, index) => {
      return (
        <QuestionGroup
          key={index}
          title={questionGroup.title}
          questions={questionGroup.questions}
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
          <Link to='/' className='Quiz-finish'>Finish!</Link>
        </div>
      </div>
    );
  }
}

export default Quiz;
