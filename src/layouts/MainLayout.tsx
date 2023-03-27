import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/molecules/navigation/Navigation';

class MainLayout extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Outlet />
      </>
    );
  }
}

export default MainLayout;
