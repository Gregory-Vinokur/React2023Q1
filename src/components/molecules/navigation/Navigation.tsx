import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav role="navigation">
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="form">Form</NavLink>
    </nav>
  );
};

export default Navigation;
