import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <nav>
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="404">404</NavLink>
      </nav>
    );
  }
}

export default Menu;
