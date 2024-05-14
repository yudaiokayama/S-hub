import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SettingPassword.css';
import Header from './Header';
import Button from './Button';

const SettingPassword: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="setting-password">
      <Header title = "Sign Up" />
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" />
      </div>
      <div className="form-actions">
        <Button text="Back" onClick={() => navigate('/verification')} />
        <Button text="Go" onClick={() => navigate('/sign-in')} />
      </div>
    </div>
  );
};

export default SettingPassword;