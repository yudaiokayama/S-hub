import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingPassword.css';

const SettingPassword: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="setting-password">
      <div className="logo">S-Hub</div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" />
      </div>
      <div className="form-actions">
        <button onClick={() => navigate('/verification')}>Back</button>
        <button onClick={() => navigate('/account-setup')}>Go</button>
      </div>
    </div>
  );
};

export default SettingPassword;