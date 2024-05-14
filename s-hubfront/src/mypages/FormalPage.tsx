import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mypage.css';
import AtsushiFormal from "../img/AtsushiFormal.png";
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import MypageHeader from '../views/MypageHeader';
import Nav from '../views/Nav';

// SNSロゴ素材はinstagramのもので代用,iタグ使うという案もある
import instagramlogo from "../img/instagramlogo.png";
import facebooklogo from "../img/instagramlogo.png";
import linkedinlogo from "../img/instagramlogo.png";
import Xlogo from "../img/instagramlogo.png";
import githublogo from "../img/instagramlogo.png";
import huggingfacelogo from "../img/instagramlogo.png";


const FormalPage: React.FC = () => {
  const navigate = useNavigate();
  const { profileImg, profileName, profileText, bio, phone, email, socialLinks } = useSelector(
    (state: RootState) => state.settings
  );
  return (
    <div className="page formal">
      {/* ページのコンテンツ */}
      <MypageHeader mode ="Formal" />
      <div className="profile">
        <div className="profile_image">
          <img src={AtsushiFormal} alt="Formal Profile" />
          {/* 今はそれっぽく見えるようにあつしの画像を入れてるけど、バックエンドAPIと通信できたら{}の中身を{profileImg}に変更してほしい */}
        </div>
        <div className = "profile_contents">
          <div className = "profile_name">
            <h2>{profileName}</h2>
            <h2>Atsushi Okamoto</h2> {/*消去*/}
          </div>
          <div className = "profile_text">
            <p>{profileText}</p>
            <p>Kyoto University<br></br>Social Informatics Course</p>{/*消去*/}
          </div>
        </div>
      </div>
      <div className="Bio">
        <h5>Bio</h5>
        <p>{bio}</p>
        <p>FormalBioFormalBioFormalBioFormalBio
          FormalBioFormalBioFormalBioFormalBioFormalBioForm
          alBioFormalBioFormalBioFormalBioFormalBioFormalBio
          FormalBioFormalBioFormalBioFormalBioFormalBioForma
          lBioFormalBioFormalBioFormalBio FormalBioFormalBio
          FormalBioFormalBioFormalBioForm
        </p> {/*消去*/}
      </div>
      <div className="contact">
        <a href={`tel:${phone}`}>
          <i className="fa fa-phone"></i>
          +81 90-1234-5678
        </a>
        <a href={`mailto:${email}`}>
          <i className="fa fa-envelope"></i>
          formal@example.com
        </a>
      </div>
      <div className = "links">
        {/* ↓ここの4つのdivタグはmypage画面をそれっぽく見せるためだけ、後で消去する */}
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
        <div className = "link">
          <a href="https://www.instagram.com/formal">
          <img src={instagramlogo}></img>
          </a>
        </div> 
        {/* ↑ここまで */}

        {Object.entries(socialLinks).map(([platform, url]) => {
          if (url) {
            return (
              <div key={platform} className="link">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={`/${platform}logo.png`} alt={`${platform} logo`} />
                </a>
              </div>
            );
          }
          return null;
        })}

      </div>
      <Nav />
    </div>
  );
};

export default FormalPage;