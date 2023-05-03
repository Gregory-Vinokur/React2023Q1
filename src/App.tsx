import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/404/NotFound';
import MainLayout from './layouts/MainLayout';
import FormPage from './pages/FormPage/FormPage';
import NotFoundRedirect from './pages/404/NotFoundRedirect';

export enum PATH {
  HOME = '/',
  ABOUT = 'about',
  FORM = 'form',
  ERROR = '404',
  DEFAULT = '*',
}

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={PATH.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PATH.ABOUT} element={<About />} />
          <Route path={PATH.FORM} element={<FormPage />} />
          <Route path={PATH.ERROR} element={<NotFound />} />
          <Route path={PATH.DEFAULT} element={<NotFoundRedirect />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
