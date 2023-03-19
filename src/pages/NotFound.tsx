import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <>
        <header>
          <h1>404</h1>
        </header>
        <p className="empty__page-content">Page not found</p>
      </>
    );
  }
}

export default NotFound;
