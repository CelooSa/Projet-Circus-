import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FireTransition from '../components/FireTransition';
import '../styles/HomeStyle.scss';

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header avec navigation */}
      <motion.header 
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">
          <Link to="/">Compagnie Vesperen</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/artistes">Artistes</Link></li>
            <li><Link to="/spectacles">Spectacles</Link></li>
            <li><Link to="/univers">L'univers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </motion.header>

      {/* Section Héro avec animation */}
      <motion.section 
        className="hero"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="hero-overlay">
          <motion.h1 
            className="hero-title"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Bienvenue dans l'univers poétique de la Compagnie Vesperen
          </motion.h1>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link to="/artistes" className="hero-button">→ Découvrir nos artistes</Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Section introduction avec citation et élément de feu */}
      <motion.section 
        className="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="fire-transition-container">
          <FireTransition />
        </div>
        <p className="intro-quote">
          « Là où les rêves prennent forme, là où l'apesanteur devient poésie. »
        </p>
      </motion.section>

      {/* Section des raccourcis avec animation séquentielle */}
      <motion.section 
        className="shortcuts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <Link to="/artistes" className="shortcut-card">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.4 }}
          >
            <h3>Artistes</h3>
            <p>Découvrez nos artistes talentueux</p>
          </motion.div>
        </Link>
        
        <Link to="/spectacles" className="shortcut-card">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          >
            <h3>Spectacles</h3>
            <p>Explorez nos créations artistiques</p>
          </motion.div>
        </Link>
        
        <Link to="/univers" className="shortcut-card">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
          >
            <h3>L'univers</h3>
            <p>Plongez dans notre monde poétique</p>
          </motion.div>
        </Link>
      </motion.section>

      {/* Pied de page */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
      >
        <div className="footer-content">
          <div className="footer-section">
            <h4>Compagnie Vesperen</h4>
            <p>Créatrice d'émotions en apesanteur</p>
          </div>
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/artistes">Artistes</Link></li>
              <li><Link to="/spectacles">Spectacles</Link></li>
              <li><Link to="/univers">L'univers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>contact@vesperen.com</p>
            <p>+33 1 23 45 67 89</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Compagnie Vesperen – Tous droits réservés</p>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Home;