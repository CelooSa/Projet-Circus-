import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import fireCampGif from '../images/fireCamp.gif';
import BurnEffect from './BurnEffect';
import '../styles/FireEffect.scss';

const FireTransition = () => {
  const [isBurning, setIsBurning] = useState(false);
  const navigate = useNavigate();

 
  const handleClick = () => {
    setIsBurning(true); 
  };

  
  useEffect(() => {
    if (isBurning) {
      const timer = setTimeout(() => {
        navigate('/spectacles-feu'); 
        setIsBurning(false); 
      }, 1878); 

      return () => clearTimeout(timer); 
    }
  }, [isBurning, navigate]);

  return (
    <>
     
      <div className="fire-container" onClick={handleClick}>
        <img src={fireCampGif} alt="Feu de camp" className="fire-icon" />
      </div>

      
      {isBurning && <BurnEffect />}
    </>
  );
};

export default FireTransition;