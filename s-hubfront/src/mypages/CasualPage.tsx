// CasualPage.tsx
import React from 'react';
import './Mypage.css';

const CasualPage: React.FC = () => {
  return (
    <div className="page casual">
      {/* ページのコンテンツ */}
      <header>
        <h1>My Page: <span>Casual</span></h1>
        <div className="s-hub">S-Hub</div>
      </header>
      <div className="profile">
        <img src="path/to/formal_profile_image.jpg" alt="Formal Profile" />
        <h2>Atsushi Okamoto</h2>
        <p>Kyoto University</p>
        <p>Social Informatics Course</p>
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
      <div className="links">
        <a href="https://www.facebook.com/formal">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/formal">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://formal.example.com">
          <i className="fas fa-times"></i>
        </a>
        <a href="https://github.com/formal">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://formal.example.com/blog">
          <i className="fas fa-rss"></i>
        </a>
      </div>
      <nav>
        <a href="#">
          <i className="fas fa-home"></i>
        </a>
        <a href="#">
          <i className="fas fa-plane"></i>
        </a>
        <a href="#">
          <i className="fas fa-cog"></i>
        </a>
      </nav>
    </div>
  );
};

export default CasualPage;