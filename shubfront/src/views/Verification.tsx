import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Verification.css';
import Header from './MypageHeader';
import Button from './Button';

const Verification: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="verification">
      <div className="form-group">
        <label htmlFor="accountNumber">Phone Number</label>
        <input type="text" id="accountNumber" />
      </div>
      <div className="form-actions">
        <button onClick={() => navigate('/sign-up')}>Back</button>
        <button onClick={() => navigate('/setting-password')}>Go</button>
      </div>
    </div>
  );
};

export default Verification;

export {};