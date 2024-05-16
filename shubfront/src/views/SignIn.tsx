import React from 'react';
import './css/SettingPassword.css';
import Header from './Header'; // Assuming you have a Header component

const SettingPassword: React.FC = () => {
  return (
    <div className="setting-password-container">
      <div className="setting-password">
        <div className="header">
          <Header title="Sign In" /> {/* Update title as needed */}
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <div className="form-actions">
            <button type="button">Cancel</button>
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingPassword;
