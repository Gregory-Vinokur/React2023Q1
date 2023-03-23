import React, { Component } from 'react';
import Header from '../../components/molecules/header/Header';

class NotFound extends Component {
  render() {
    return (
      <>
        <Header title="404" />
        <p className="empty__page-content">Page not found</p>
      </>
    );
  }
}

export default NotFound;
