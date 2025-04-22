import React from 'react';
import { motion } from 'framer-motion';
import FireTransition from '../components/FireTransition'; 


function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Page d'accueil</h1>
      <p>test de la police sur la page avec livvic </p>
      <FireTransition /> 
    </motion.div>
  );
}

export default Home;