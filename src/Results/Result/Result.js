import React from 'react';
import './Result.css';

class Result extends React.Component {
  render() {
    const websiteLink = this.props.websiteLink && (
      <a 
        className='button Result-link Result-link-website' 
        href={this.props.websiteLink}>
        <h3>Website</h3>
      </a>
    );
    const donateLink = this.props.donateLink && (
      <a
        className='button Result-link Result-link-donate'
        href={this.props.donateLink}>
        <h3>Donate</h3>
      </a>
    );
    const image = this.props.image && (
      <img
        className='Result-image'
        alt='Image of activism group'
        src={this.props.image}
      />
    );

    return (
      <div className='Result'>
        <h2 className='Result-title'>
          {this.props.name}
        </h2>
        <div className='Result-body'>
          {websiteLink}
          {donateLink}
          <div className='Result-description'>
            {this.props.description || 'No description provided.'}
          </div>
          {image}
        </div>
      </div>
    );
  }
}

export default Result;