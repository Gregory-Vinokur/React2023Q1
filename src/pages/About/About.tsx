import React, { Component } from 'react';
import Header from '../../components/molecules/header/Header';

class About extends Component {
  render() {
    return (
      <>
        <Header title="About" />
        <p className="empty__page-content">About page content</p>
      </>
    );
  }
}

export default About;
