import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import Quiz from './Quiz/Quiz.js';
import './index.css';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/quiz" component={Quiz}/>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById('root'));
