import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SignUp.css';
import sublogo from "../img/sublogo.svg";
import Button from './Button';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="sign-up">
      <img src={sublogo} />
      <button className = "SignUpButton" onClick={() => navigate('/verification')}>Sign Up</button>
      <button className = "SignInButton" onClick={() => navigate('/sign-in')}>Sign In</button>
    </div>
  );
};

export default SignUp;