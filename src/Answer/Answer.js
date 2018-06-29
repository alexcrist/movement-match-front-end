import React from 'react';
import './Answer.css';

export default class Answer extends React.Component {
  render() {
    return (
      <div className='Answer'>
        <div className='Answer-title'>
          {this.props.title}
        </div>
      </div>
    );
  }
}
