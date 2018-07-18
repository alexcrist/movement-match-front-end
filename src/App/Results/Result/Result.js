import React from 'react';
import './Result.css';

class Result extends React.Component {
  render() {
    let title = this.props.websiteLink ? (
      <a
        className='Result-title subtitle'
        href={this.props.websiteLink}
        target='_'>
        {this.props.name}
      </a>
    ) : (
      <div className='Result-title subtitle'>
        {this.props.name}
      </div>
    );

    const description = (
      <div className='Result-description text'>
        {this.props.description || 'No description provided.'}
      </div>
    );

    const websiteLink = this.props.websiteLink && (
      <a 
        className='button Result-link Result-link-website' 
        href={this.props.websiteLink}
        target='_'>
        Website
      </a>
    );

    const donateLink = this.props.donateLink && (
      <a
        className='button Result-link Result-link-donate'
        href={this.props.donateLink}
        target='_'>
        Donate
      </a>
    );
    
    const image = this.props.image && (
      <img
        className='Result-image'
        alt='Activism group'
        src={this.props.image}
      />
    );

    return (
      <div className='Result card'>
        {title}
        {description}
        {image}
        {websiteLink}
        {donateLink}
      </div>
    );
  }
}

export default Result;