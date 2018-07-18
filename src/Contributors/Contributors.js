import React from 'react';
import './Contributors.css';

class Contributors extends React.Component {
  constructor(props) {
    super(props);
    props.setSubtitle(': Contributors');
  }
  
  render() {
    return (
      <div>Contributors coming soon...</div>
    );
  }
}

export default Contributors;