import React from 'react';
import { motion } from 'framer-motion';
import ArtFireGif from '../images/art-fire.gif'; 
import '../styles/FireEffect.scss';

const BurnEffect = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 2 }} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${ArtFireGif})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    />
  );
};

export default BurnEffect;