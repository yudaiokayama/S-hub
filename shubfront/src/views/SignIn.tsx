import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SignIn.css';
import Header from './Header';
import Button from './Button';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="sign-in">
      <Header title="Sign In" />
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="phoneNumber" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="form-actions">
        <Button text="Back" onClick={() => navigate('/sign-up')} />
        <Button text="Go" onClick={() => navigate('/account-setup')} />
      </div>
    </div>
  );
};

export default SignIn;