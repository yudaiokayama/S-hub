import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/network.css';
import Header from './Header';
import Nav from './Nav';

const Network: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="network">
      <body>
        <Header title="network" />
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
        <Nav />
      </body>
    </div>
  );
};

export default Network;