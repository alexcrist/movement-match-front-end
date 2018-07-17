import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import Quiz from './Quiz/Quiz.js';
import Results from './Results/Results.js';
import './index.css';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.setResults = this.setResults.bind(this);
    this.state = {};
  }

  setResults(results) {
    console.log('setResults', results);
    this.setState({ results });
  }

  render() {
    const QuizWithProps = () => <Quiz setResults={this.setResults}/>;
    const ResultsWithProps = () => <Results results={this.state.results}/>;
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/quiz' render={QuizWithProps}/>
          <Route path='/results' render={ResultsWithProps}/>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById('root'));
