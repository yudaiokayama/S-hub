import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Nav.css';

const Nav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      <button className="MypagesButton" onClick={() => navigate('/mypages')}>My Page</button>
      <button className="SearchButton" onClick={() => navigate('/search')}>Search</button>
      <button className="NetworkButton" onClick={() => navigate('/network')}>Network</button>
      <button className="SettingsButton" onClick={() => navigate('/settings')}>Settings</button>
    </nav>
  );
};

export default Nav;
