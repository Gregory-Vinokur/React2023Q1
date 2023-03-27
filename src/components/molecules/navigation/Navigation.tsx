import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav role="navigation">
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
    );
  }
}

export default Navigation;
