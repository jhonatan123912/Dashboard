import './App.css';
import Sidebar from './components/Sidebar';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Statistik from './pages/Statistik';
import User from './pages/User';
import CMS from './pages/CMS';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/statistik" element={<Statistik />} />
        <Route path="/User" element={<User />} />
        <Route path="/CMS" element={<CMS />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
