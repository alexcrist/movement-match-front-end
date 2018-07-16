import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo36.svg';
import './Home.css';

const description1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const description2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='Home-header'>
          <img className='Home-logo' src={logo} alt='Movement Match logo'/>
        </div>
        <h1 className='Home-title'>Movement Match</h1>
        <div className='Home-description'>{description1}</div>
        <div className='Home-description'>{description2}</div>
        <Link className='Home-link' to="/quiz">Take the Quiz</Link>
      </div>
    );
  }
}

export default Home;