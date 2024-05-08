import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="sign-up">
      <div className="logo">S-Hub</div>
      <button onClick={() => navigate('/verification')}>Sign Up</button>
      <button onClick={() => navigate('/')}>Sign In</button>
    </div>
  );
};

export default SignUp;