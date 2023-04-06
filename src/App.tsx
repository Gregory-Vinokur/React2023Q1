import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/404/NotFound';
import MainLayout from './layouts/MainLayout';
import FormPage from './pages/FormPage/FormPage';

export enum PATH {
  HOME = '/',
  ABOUT = 'about',
  FORM = 'form',
  ERROR = '404',
  DEFAULT = '*',
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={PATH.HOME} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={PATH.ABOUT} element={<About />} />
            <Route path={PATH.FORM} element={<FormPage />} />
            <Route path={PATH.ERROR} element={<NotFound />} />
            <Route path={PATH.DEFAULT} element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
