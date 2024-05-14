import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/network.css';

const Network: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="network">
      <body>
        <header>
          <div class="header-left">Network</div>
          <div class="header-right">S-Hub</div>
        </header>
        <main>
          <div class="user-list">
            <div class="user-item">
              <div class="user-icon"></div>
              <div class="user-name">User Name</div>
            </div>
            <div class="user-item">
              <div class="user-icon"></div>
              <div class="user-name">User Name</div>
            </div>
            <div class="user-item">
              <div class="user-icon"></div>
              <div class="user-name">User Name</div>
            </div>
            <div class="user-item">
              <div class="user-icon"></div>
              <div class="user-name">User Name</div>
            </div>
            <div class="user-item">
              <div class="user-icon"></div>
              <div class="user-name">User Name</div>
            </div>
          </div>
        </main>
        <footer>
          <div class="footer-item">My Page</div>
          <div class="footer-item">Search</div>
          <div class="footer-item">Network</div>
          <div class="footer-item">Settings</div>
        </footer>
      </body>
    </div>
  );
};

export default Network;