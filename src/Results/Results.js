import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo36.svg';
import './Results.css';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.results = props.results || localStorage.getItem('results');
    localStorage.setItem('results', this.results);
  }

  render() {
    return (
      <div className='Results'>
        <div className='Results-header'>
          <Link to='/' className='Results-logo-container'>
            <img 
              className='Results-logo'
              src={logo}
              alt='Movement Match logo'
            />
          </Link>
          <h1 className='Results-title'>Movement Match Results</h1>
        </div>
        <div className='Results-body'>
          <div>TODO: Format results</div>
          <div>Results: {this.results}</div>
          <div>TODO: 'Share the quiz' buttons goes here</div>
        </div>
      </div>
    );
  }
}

export default Results;