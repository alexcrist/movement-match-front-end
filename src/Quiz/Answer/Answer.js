import React from 'react';
import './Answer.css';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const {
      setAnswer,
      groupIndex,
      questionIndex,
      answerIndex,
      multipleChoice
    } = this.props;
    setAnswer(groupIndex, questionIndex, answerIndex, multipleChoice);
  }

  render() {
    const { multipleChoice, title, group } = this.props;
    const type = multipleChoice ? 'checkbox' : 'radio';
    return (
      <div className='Answer'>
        <input
          type={type}
          id={title}
          name={group}
          onChange={this.onChange}
        />
        <label
          className='Answer-title'
          htmlFor={title}>
          {title}
        </label>
      </div>
    );
  }
}
