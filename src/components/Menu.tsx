import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <nav role="navigation">
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    );
  }
}

export default Menu;
