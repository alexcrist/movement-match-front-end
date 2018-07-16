import React from 'react';
import './Answer.css';

export default class Answer extends React.Component {
  render() {
    const type = this.props.multipleChoice ? 'checkbox' : 'radio';
    return (
      <div className='Answer'>
        <input
          type={type}
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
