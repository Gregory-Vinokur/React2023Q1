import React from 'react';
import Header from '../../components/molecules/header/Header';

const NotFound = () => {
  return (
    <>
      <Header title="404" />
      <p className="empty__page-content">Page not found</p>
    </>
  );
};

export default NotFound;
