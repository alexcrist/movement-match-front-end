import React from 'react';
import './Answer.css';

export default class Answer extends React.Component {
  render() {
    return (
      <div className='Answer'>
        <input
          type='radio'
          id={this.props.title}
          name={this.props.group}
        />
        <label
          className='Answer-title'
          htmlFor={this.props.title}>
          {this.props.title}
        </label>
      </div>
    );
  }
}
