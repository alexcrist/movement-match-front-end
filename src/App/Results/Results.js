import React from 'react';
import _ from 'lodash';
import Result from './Result/Result.js';
import './Results.css';

class Results extends React.Component {
  constructor(props) {
    super(props);
    props.setSubtitle(': Results');
    const cachedResults = JSON.parse(localStorage.getItem('results'));
    this.results = props.results === undefined ? cachedResults : props.results;
  }

  render() {
    const results = _.map(this.results, (result, index) => {
      return <Result key={index} {...result} />;
    });
    return <div className='Results'>{results}</div>;
  }
}

export default Results;