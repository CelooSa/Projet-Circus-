import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import SpectaclesFeu from './pages/SpectaclesFeu';


import './styles/Global.scss';
import './App.css';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
} 

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/spectacles-feu" element={<SpectaclesFeu />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppWrapper;