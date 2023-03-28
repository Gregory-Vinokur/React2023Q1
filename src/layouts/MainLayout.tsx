import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/molecules/navigation/Navigation';

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default MainLayout;
