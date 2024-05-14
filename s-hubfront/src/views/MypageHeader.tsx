import React from 'react';
import './css/MypageHeader.css';
import sublogo from '../img/sublogo.svg';

const MypageHeader: React.FC<{ mode: string }> = ({mode}) => {
  return (
    <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      <h1>My Page - <span>{mode}</span></h1>
      <img src = {sublogo}></img>
    </header>
  );
};

export default MypageHeader;
