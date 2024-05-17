import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SignUp.css';
import sublogo from "../img/sublogo.svg";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="network">
      <div className="sign-up">
        <div className="logo">
          <img src={sublogo} alt="S-Hub Logo" />
        
        </div>
        <button className="SignUpButton" onClick={() => navigate('/verification')}>
          Sign Up
        </button>
        <button className="SignInButton" onClick={() => navigate('/sign-in')}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;