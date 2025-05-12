
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import SpectaclesFeu from './pages/SpectaclesFeu';
import Artistes from './pages/Artists'; 

import './styles/Global.scss';
import './styles/HomeStyle.scss';
import './styles/ArtistsCarousel.scss';

import './App.css';
import VerifyEmail from './pages/VerifyEmail';

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
        <Route path="/artistes" element={<Artistes />} /> 
        <Route path='/verify/:token' element={<VerifyEmail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppWrapper;