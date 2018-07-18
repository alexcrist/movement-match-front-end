import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './util/ScrollToTop.js';
import Home from './Home/Home.js';
import Quiz from './Quiz/Quiz.js';
import Results from './Results/Results.js';
import Contributors from './Contributors/Contributors.js';
import './index.css';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.setResults = this.setResults.bind(this);
    this.setSubtitle = this.setSubtitle.bind(this);
    this.state = {
      subtitle: ''
    };
  }

  setSubtitle(subtitle) {
    this.setState({ subtitle });
  }

  setResults(results) {
    this.setState({ results });
    localStorage.setItem('results', JSON.stringify(results));
  }

  render() {
    const HomeWithProps = () => (
      <Home setSubtitle={this.setSubtitle} />
    );
    const QuizWithProps = () => (
      <Quiz
        setResults={this.setResults}
        setSubtitle={this.setSubtitle}
      />
    );
    const ResultsWithProps = () => (
      <Results
        setSubtitle={this.setSubtitle}
        results={this.state.results}
      />
    );
    const ContributorsWithProps = () => (
      <Contributors setSubtitle={this.setSubtitle} /> 
    );

    return (
      <BrowserRouter
        basename={process.env.PUBLIC_URL}
        history={createBrowserHistory()}>
        <ScrollToTop>
          <div className='Index'>
            <div className='Index-header'>
              <h1 className='Index-title'>
                <Link to='/'>
                  Movement Match
                </Link>{this.state.subtitle}
              </h1>
            </div>
            <div className='Index-body'>
              <Route exact path='/' render={HomeWithProps}/>
              <Route path='/quiz' render={QuizWithProps}/>
              <Route path='/results' render={ResultsWithProps}/>
              <Route path='/contributors' render={ContributorsWithProps}/>
            </div>
            <div className='Index-footer'>
              <div className='Index-footer-items'>
                <Link className='Index-footer-item' to='/contributors'>
                  Contributors
                </Link>
              </div>
            </div>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById('root'));
