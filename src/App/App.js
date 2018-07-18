import React from 'react';
import _ from 'lodash';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import logo from '../assets/match.png';

import ScrollToTop from '../util/ScrollToTop.js';

import Home from './Home/Home.js';
import Quiz from './Quiz/Quiz.js';
import Results from './Results/Results.js';
import Contributors from './Contributors/Contributors.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setResults = this.setResults.bind(this);
    this.setSubtitle = this.setSubtitle.bind(this);
    this.getHeader = this.getHeader.bind(this);
    this.getBody = this.getBody.bind(this);
    this.getFooter = this.getFooter.bind(this);
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

  getHeader() {
    return (
      <div className='App-header'>
          <h1 className='App-title'>
            <Link to='/'>
              Movement Match
            </Link>
            {this.state.subtitle}
          </h1>
        </div>
    );
  }

  getBody() {
    const props = {
      setSubtitle: this.setSubtitle,
      setResults: this.setResults,
      results: this.state.results
    }

    const routeData = [
      { Component: Home, path: '/', exact: true },
      { Component: Quiz, path: '/quiz' },
      { Component: Results, path: '/results' },
      { Component: Contributors, path: '/contributors' }
    ];

    const routes = _.map(routeData, ({ Component, path, exact }, index) => {
      const ComponentWithProps = () => <Component {...props} />;
      return (
        <Route
          key={index} 
          exact={exact}
          path={path}
          render={ComponentWithProps}
        />
      );
    });

    console.log(routes);

    return <div className='App-body'>{routes}</div>;
  }

  getFooter() {
    const footerData = [
      { name: 'Contributors', path: '/contributors' }
    ];

    const footerItems = _.map(footerData, ({ name, path }, index) => {
      return (
        <Link className='App-footer-item' to={path} key={index}>
          {name}
        </Link>
      );
    });

    return (
      <div className='App-footer'>
        <div className='App-footer-items'>{footerItems}</div>
      </div>
    );
  }

  render() {
    const header = this.getHeader();
    const body = this.getBody();
    const footer = this.getFooter();

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <div className='App'>
            {header}
            {body}
            {footer}
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;