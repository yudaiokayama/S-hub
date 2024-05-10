import React from 'react';
import './Splash.css';
import mainlogo from "../img/mainlogo.svg";

const Splash: React.FC = () => {
  return (
    <div className="splash">
      <img src={mainlogo} />
    </div>
  );
};

export default Splash;