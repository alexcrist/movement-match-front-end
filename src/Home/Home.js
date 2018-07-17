import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const text1 = 'Movement Match\'s goal is to connect more people to existing activist groups to further build the strength of our movement and fight isolation, alienation, and complacency.';
const text2 = 'People are imperfect. Organizations are imperfect. Movements are imperfect. But now is not the time for perfectionism. Now is the time to find your group and make a positive contribution.';
const text3 = 'Fired up for justice? Here\'s something you can do. Take the quiz to be matched with activist movements that algin with your passions and location.';

class Home extends React.Component {
  render() {
    const resultsButton = localStorage.getItem('results') !== null && (
      <Link className='Home-link Home-link-results' to='/results'>Results</Link>
    );

    return (
      <div className='Home'>
        <div className='Home-header'>
          <h1 className='Home-title'>Movement Match</h1>
        </div>
        <div className='Home-body'>
          <h2 className='Home-subtitle'>Mission</h2>
          <div className='Home-description'>{text1}</div>
          <h2 className='Home-subtitle'>Movements</h2>
          <div className='Home-description'>{text2}</div>
          <h2 className='Home-subtitle'>Action</h2>
          <div className='Home-description'>{text3}</div>
          <Link className='Home-link Home-link-quiz' to='/quiz'>
            Take the Quiz
          </Link>
          {resultsButton}
        </div>
        <div className='Home-footer'>
          <div className='Home-footer-items'>
            <Link className='Home-footer-item' to='/contributors'>
              Contributors
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;