import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/network.css';

const Network: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="network">
      <body>
        <header>
          <div className="header-left">Network</div>
          <div className="header-right">S-Hub</div>
        </header>
        <main>
          <div className="user-list">
            <div className="user-item">
              <div className="user-icon"></div>
              <div className="user-name">User Name</div>
            </div>
            <div className="user-item">
              <div className="user-icon"></div>
              <div className="user-name">User Name</div>
            </div>
            <div className="user-item">
              <div className="user-icon"></div>
              <div className="user-name">User Name</div>
            </div>
            <div className="user-item">
              <div className="user-icon"></div>
              <div className="user-name">User Name</div>
            </div>
            <div className="user-item">
              <div className="user-icon"></div>
              <div className="user-name">User Name</div>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer-item">My Page</div>
          <div className="footer-item">Search</div>
          <div className="footer-item">Network</div>
          <div className="footer-item">Settings</div>
        </footer>
      </body>
    </div>
  );
};

export default Network;