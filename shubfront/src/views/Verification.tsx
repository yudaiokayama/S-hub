import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Verification.css';
import Header from './Header';
import Button from './Button';

const Verification: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="verification">
      <Header title="Sign Up" />
      <div className="form-group">
        <label htmlFor="accountNumber">Phone Number</label>
        <input type="text" id="accountNumber" />
      </div>
      <div className="form-actions">
        <Button text= "Back"onClick={() => navigate('/sign-up')} />
        <Button text="Go "onClick={() => navigate('/setting-password')} />
      </div>
    </div>
  );
};

export default Verification;

export {};