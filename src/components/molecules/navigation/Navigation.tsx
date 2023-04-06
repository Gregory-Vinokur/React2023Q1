import { PATH } from '../../../App';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav role="navigation">
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to={PATH.ABOUT}>About</NavLink>
      <NavLink to={PATH.FORM}>Form</NavLink>
    </nav>
  );
};

export default Navigation;
