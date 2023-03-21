import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './../components/Menu';

class MainLayout extends Component {
  render() {
    return (
      <>
        <Menu />
        <Outlet />
      </>
    );
  }
}

export default MainLayout;
