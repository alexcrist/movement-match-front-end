import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const text1 = 'Movement Match\'s goal is to connect more people to existing activist groups to further build the strength of our movement and fight isolation, alienation, and complacency.';
const text2 = 'People are imperfect. Organizations are imperfect. Movements are imperfect. But now is not the time for perfectionism. Now is the time to find your group and make a positive contribution.';
const text3 = 'Fired up for justice? Here\'s something you can do. Take the quiz to be matched with activist movements that algin with your passions and location.';

class Home extends React.Component {
  constructor(props) {
    super(props);
    props.setSubtitle('');
  }

  render() {
    const resultsButton = localStorage.getItem('results') !== null && (
      <Link className='button Home-link Home-link-results' to='/results'>Results</Link>
    );

    return (
      <div className='Home'>
        <div className='Home-body card'>
          <h2 className='Home-subtitle subtitle'>Mission</h2>
          <div className='Home-description text'>{text1}</div>

          <h2 className='Home-subtitle subtitle'>Movements</h2>
          <div className='Home-description text'>{text2}</div>

          <h2 className='Home-subtitle subtitle'>Action</h2>
          <div className='Home-description text'>{text3}</div>

          <Link className='button Home-link Home-link-quiz' to='/quiz'>
            Take the Quiz
          </Link>
          {resultsButton}
        </div>
      </div>
    );
  }
}

export default Home;