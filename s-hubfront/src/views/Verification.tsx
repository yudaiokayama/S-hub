import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Verification.css';

const Verification: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="verification">
      <div className="logo">S-Hub</div>
      <div className="form-group">
        <label htmlFor="accountNumber">Account Number</label>
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