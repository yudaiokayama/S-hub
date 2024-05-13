// FormalPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mypage.css';
import AtsushiFormal from "../img/AtsushiFormal.png";

// SNSロゴ素材はinstagramのもので代用,iタグ使うという案もある
import instagramlogo from "../img/instagramlogo.png";
import facebooklogo from "../img/instagramlogo.png";
import linkedinlogo from "../img/instagramlogo.png";
import Xlogo from "../img/instagramlogo.png";
import githublogo from "../img/instagramlogo.png";
import huggingfacelogo from "../img/instagramlogo.png";


const FormalPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="page formal">
      {/* ページのコンテンツ */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      <header>
        <h1>My Page: <span>Formal</span></h1>
        <div className="s-hub">S-Hub</div>
      </header>
      <div className="profile">
        <div className="profile_image">
          <img src={AtsushiFormal} alt="Formal Profile" />
        </div>
        <div className = "profile_contents">
          <div className = "profile_name">
            <h2>Atsushi Okamoto</h2>
          </div>
          <div className = "profile_text">
            <p>Kyoto University</p>
            <p>Social Informatics Course</p>
          </div>
        </div>
      </div>
      <div className="Bio">
        <h5>Bio</h5>
        <p>
            FormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBioFormalBio
        </p>
      </div>
      <div className="contact">
        <a href="tel:+819012345678">
          <i className="fa fa-phone"></i>
          +81 90-1234-5678
        </a>
        <a href="mailto:formal@example.com">
          <i className="fa fa-envelope"></i>
          formal@example.com
        </a>
      </div>
      <div className = "links">
        <div className = "link">
          <a href="https://www.instagram.com/formal">
          <img src={instagramlogo}></img>
          {/* <i className="fab fa-facebook"></i> */}
          </a>
        </div>
        <div className = "link">
          <a href="https://www.instagram.com/formal">
          <img src={instagramlogo}></img>
          </a>
        </div>
        <div className = "link">
          <a href="https://www.instagram.com/formal">
          <img src={instagramlogo}></img>
          </a>
        </div>
        <div className = "link">
          <a href="https://www.instagram.com/formal">
          <img src={instagramlogo}></img>
          </a>
        </div>
      </div>
      <nav>
        <button className = "MypagesButton" onClick={() => navigate('/mypages')}>My Page</button>
        <button className = "SearchButton" onClick={() => navigate('/search')}>Search</button>
        <button className = "NetworkButton" onClick={() => navigate('/network')}>Network</button>
        <button className = "SettingsButton" onClick={() => navigate('/settings')}>Settings</button>
      </nav>
    </div>
  );
};

export default FormalPage;