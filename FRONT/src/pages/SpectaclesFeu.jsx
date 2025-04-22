import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

function SpectaclesFeu() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Page des spectacles de feu</h1>
      <Link to="/">Retour à l'accueil</Link>
    </motion.div>
  );
}

export default SpectaclesFeu;