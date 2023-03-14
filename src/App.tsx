import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
