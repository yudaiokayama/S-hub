import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Splash.css';
import mainlogo from "../img/mainlogo.svg";


const Splash: React.FC = () => {

  const navigate =useNavigate();

  const handleClick = () => {
    navigate('/sign-up');
  };

  return (
    <div className="splash" onClick={handleClick}>
      <img src={mainlogo} />
    </div>
  );
};

export default Splash;